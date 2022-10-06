import { UserContext } from "../middlewares/route.middleware"
import { 
  PostIdSchema,
  PostSchema, 
  ReplyPostSchema } from "../schemas/post.schema";
import { 
  createPostService, 
  deletePostService, 
  findAllPostService, 
  findPostPopulatorService, 
  findPostService, 
  updatePostService } from "../services/post.service";
import { updateUserService } from "../services/user.service";
import { 
  customNanoid, 
  postValidator, 
  trpcError, 
  trpcSuccess } from "./utils.controller";


// --------Queries--------
export const getPostHandler = async( { postId }: PostIdSchema ) =>{
  const post = postValidator(await findPostPopulatorService(
    { postId },
    "-_id",
    {
      path: "owner",
      select: "username email"
    }
  ))

  post.owner.email = post.owner.email.split("@")[0]

  return trpcSuccess(true, post)
}

export const getAllPostHandler = async() => {
  const posts = await findAllPostService(
    [
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
          pipeline: [
            {
              $project: {
                username: 1,
                email: 1,
                _id: 0,
              },
            }
          ]
        }
      },
      {
        $unwind: "$owner"
      },
      {
        $set: {
          replies: {
            $size: "$replies"
          },
          "owner.email" : {
            $first: {
              $split: ["$owner.email", "@"]
            }
          }
        }
      }
    ]
  )

  return trpcSuccess(true, posts)

}

// --------Mutations--------


export const createPostHandler = async( { user }: UserContext, post: PostSchema ) =>{
  
  const createdPost = await createPostService({
    ...post,
    owner: user._id,
    postId: customNanoid(10)
  })

  await updateUserService(
    { email: user.email },
    {
      $push: {
        posts: createdPost._id
      }
    }
  )

  return trpcSuccess(true, "Post has been created")
}

export const replyPostHandler = async( { user }: UserContext, reply: ReplyPostSchema ) => {
  const address = user.email.split("@")[0]
  const post = postValidator(await findPostService({ postId: reply.postId }))
  const replyBody = {
    content: reply.content,
    owner: {
      username: user.username,
      email: user.email.split("@")[0]
    }
  }

  await updatePostService(
    { postId: post.postId },
    {
      $push: {
        replies: replyBody
      }
    }
  )

  return trpcSuccess(true, "Successfully replied to post")
}

export const deletePostHandler = async( { user }: UserContext, post: PostIdSchema ) => {

  const deletedPost = await deletePostService({ postId: post.postId })
  
  if ( !deletedPost ) {
    return trpcError("NOT_FOUND", "No post matches post id")
  }

  await updateUserService(
    { email: user.email },
    {
      $pull: {
        posts: deletedPost._id
      }
    }
  )

  return trpcSuccess(true, "Successfully deleted post")
}
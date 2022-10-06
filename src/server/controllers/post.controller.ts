import { UserContext } from "../middlewares/route.middleware"
import { 
  EditPostSchema,
  PostIdSchema,
  PostSchema, 
  ReplyPostSchema } from "../schemas/post.schema";
import { 
  createPostService, 
  deletePostService, 
  findAllPostAggregator, 
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
  const post = postValidator(await findPostService(
    { postId },
    "-_id",
  ))

  post.owner.email = post.owner.email.split("@")[0]

  return trpcSuccess(true, post)
}

export const getAllPostHandler = async() => {
  const posts = await findAllPostAggregator([
    {
      $set: {
        replies: {
          $size: "$replies"
        }
      }
    }
  ])

  return trpcSuccess(true, posts)
}

// --------Mutations--------

export const createPostHandler = async( { user }: UserContext, post: PostSchema ) =>{
  
  const createdPost = await createPostService({
    ...post,
    owner: {
      username: user.username,
      email: user.email.split("@")[0]
    },
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

export const deletePostHandler = async( { user }: UserContext, { postId }: PostIdSchema ) => {
  const post = postValidator(await findPostService({ postId }))

  if ( !user.posts?.find(ownedPost => ownedPost.equals(post._id)) ) {
    return trpcError("FORBIDDEN", "Can only delete owned post")
  }

  const deletedPost = postValidator(await deletePostService({ postId: post.postId }))
  
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

export const editPostHandler = async( { user }: UserContext, editBody: EditPostSchema ) => {
  const post = postValidator( await findPostService({ postId: editBody.postId }) )

  if ( !user.posts?.find(ownedPost => ownedPost.equals(post._id)) ) {
    return trpcError("FORBIDDEN", "Can only edit owned post")
  }

  const { postId, ...restEdit } = editBody

  await updatePostService(
    { postId: editBody.postId },
    restEdit
  )

  return trpcSuccess(true, "Successfully updated post")
}
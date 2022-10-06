import { UserContext } from "../middlewares/route.middleware"
import { 
  PostSchema, 
  ReplyPostSchema } from "../schemas/post.schema";
import { createPostService, findPostService, updatePostService } from "../services/post.service";
import { updateUserService } from "../services/user.service";
import { 
  customNanoid, 
  postValidator, 
  trpcSuccess } from "./utils.controller";


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
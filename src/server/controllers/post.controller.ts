import { UserContext } from "../middlewares/route.middleware"
import { PostSchema } from "../schemas/post.schema";
import { createPostService } from "../services/post.service";
import { updateUserService } from "../services/user.service";
import { 
  customNanoid, 
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
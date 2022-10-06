import { 
  createPostHandler, 
  replyPostHandler } from "../controllers/post.controller";
import { isValidUser } from "../middlewares/route.middleware";
import { createRouter } from "../router/createRouter";
import { 
  postSchema, 
  replyPostSchema } from "../schemas/post.schema";


export const postRouter = createRouter()
  // need authentication
  .middleware(({ ctx, next }) => isValidUser(ctx, next))
  .mutation("create", {
    input: postSchema,
    resolve: ({ ctx, input }) => createPostHandler(ctx, input)
  })
  .mutation("reply", {
    input: replyPostSchema,
    resolve: ({ ctx, input }) => replyPostHandler(ctx, input)
  })
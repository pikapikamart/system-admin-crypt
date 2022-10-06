import { 
  createPostHandler, 
  deletePostHandler, 
  getPostHandler, 
  replyPostHandler } from "../controllers/post.controller";
import { isValidUser } from "../middlewares/route.middleware";
import { createRouter } from "../router/createRouter";
import { 
  postIdSchema,
  postSchema, 
  replyPostSchema } from "../schemas/post.schema";


export const postRouter = createRouter()
  .query("get", {
    input: postIdSchema,
    resolve: ({ input }) => getPostHandler(input)
  })
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
  .mutation("delete", {
    input: postIdSchema,
    resolve: ({ ctx, input }) => deletePostHandler(ctx, input)
  })
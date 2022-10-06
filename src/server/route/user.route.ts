import { 
  signupUserHandler, 
  validateUserHandler } from "../controllers/user.controller";
import { createRouter } from "../router/createRouter";
import { 
  loginUserSchema, 
  userSchema } from "../schemas/user.schema";


export const userRouter = createRouter()
  .query(".validate", {
    input: loginUserSchema,
    resolve: ({ input }) => validateUserHandler(input)
  })
  .mutation("signup", {
    input: userSchema,
    resolve: ({ input }) => signupUserHandler( input )
  })
import { signupUserHandler } from "../controllers/user.controller";
import { createRouter } from "../router/createRouter";
import { userSchema } from "../schemas/user.schema";


export const userRouter = createRouter()
  .mutation("signup", {
    input: userSchema,
    resolve: ({ input }) => signupUserHandler( input )
  })
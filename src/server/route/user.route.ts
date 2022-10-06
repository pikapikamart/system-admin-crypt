import { validateUserHandler } from "../controllers/user.controller";
import { createRouter } from "../router/createRouter";
import { userSchema } from "../schemas/user.schema";


export const userRouter = createRouter()
  .query("validate", {
    input: userSchema,
    resolve: ({ input }) => validateUserHandler( input )
  })
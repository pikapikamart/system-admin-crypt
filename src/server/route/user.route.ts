import { 
  coinWatchlistHandler,
  getProfileHandler,
  signupUserHandler, 
  updateProfileHandler, 
  validateUserHandler } from "../controllers/user.controller";
import { isValidUser } from "../middlewares/route.middleware";
import { createRouter } from "../router/createRouter";
import { coinSchema } from "../schemas/coin.schema";
import { 
  loginUserSchema, 
  updateUserSchema, 
  userSchema } from "../schemas/user.schema";


export const userRouter = createRouter()
  .query("validate", {
    input: loginUserSchema,
    resolve: ({ input }) => validateUserHandler(input)
  })
  .mutation("signup", {
    input: userSchema,
    resolve: ({ input }) => signupUserHandler( input )
  })
  // requires authentication
  .middleware(({ ctx, next }) => isValidUser(ctx, next))
  .query("get-profile", {
    resolve: ({ ctx }) => getProfileHandler(ctx)
  })
  .mutation("watchlist", {
    input: coinSchema,
    resolve: ({ ctx, input }) => coinWatchlistHandler(ctx, input)
  })
  .mutation("update-profile", {
    input: updateUserSchema,
    resolve: ({ ctx, input }) => updateProfileHandler(ctx, input)
  })
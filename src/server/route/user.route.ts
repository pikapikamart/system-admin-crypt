import { 
  coinWatchlistHandler,
  signupUserHandler, 
  validateUserHandler } from "../controllers/user.controller";
import { isValidUser } from "../middlewares/user.route.middleware";
import { createRouter } from "../router/createRouter";
import { cryptoSymbolSchema } from "../schemas/crypto.schema";
import { 
  loginUserSchema, 
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
  .mutation("watchlist", {
    input: cryptoSymbolSchema,
    resolve: ({ ctx, input }) => coinWatchlistHandler(ctx, input)
  })
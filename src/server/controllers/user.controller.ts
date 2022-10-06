import { UserContext } from "../middlewares/route.middleware";
import { CoinSchema } from "../schemas/coin.schema";
import { LoginUserSchema, UserSchema } from "../schemas/user.schema";
import { 
  createUserService, 
  findUserService, 
  updateUserService} from "../services/user.service";
import { 
  customNanoid,
  loginValidator,
  trpcError, 
  trpcSuccess } from "./utils.controller";


export const signupUserHandler = async( signupBody: UserSchema ) => {
  const foundUser = await findUserService({ email: signupBody.email })

  if ( foundUser ) {
    return trpcError("CONFLICT", "Email is already in use")
  }

  await createUserService({
    ...signupBody,
    userId: customNanoid(10)
  })

  return trpcSuccess(true, "Account has been created")
}

export const validateUserHandler = async( loginBody: LoginUserSchema ) => {
  const user = loginValidator(await findUserService({ email: loginBody.email }))

  if ( !await user.comparePassword(loginBody.password) ) {
    return trpcError("CONFLICT", "Password does not match")
  }

  return trpcSuccess(true, "Account validated")
}

export const coinWatchlistHandler = async( { user }: UserContext, coin: CoinSchema ) => {

  if ( user.watchlist?.find(token => token.id===coin.id) ) {
    await updateUserService(
      { email: user.email },
      {
        $pull: {
          watchlist: coin
        }
      }
    )

    return trpcSuccess(true, "Coin has been removed from watchlist")
  }

  await updateUserService(
    { email: user.email },
    {
      $push: {
        watchlist: coin
      }
    }
  )

  return trpcSuccess(true, "Coin has been added to watchlist")
}
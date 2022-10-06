import { UserContext } from "../middlewares/user.route.middleware";
import { CryptoSymbolSchema } from "../schemas/crypto.schema";
import { LoginUserSchema, UserSchema } from "../schemas/user.schema";
import { 
  createUser, 
  findUser, 
  updateUser} from "../services/user.service";
import { 
  customNanoid,
  loginValidator,
  trpcError, 
  trpcSuccess } from "./utils.controller";


export const signupUserHandler = async( signupBody: UserSchema ) => {
  const foundUser = await findUser({ email: signupBody.email })

  if ( foundUser ) {
    return trpcError("CONFLICT", "Email is already in use")
  }

  await createUser({
    ...signupBody,
    userId: customNanoid(10)
  })

  return trpcSuccess(true, "Account has been created")
}

export const validateUserHandler = async( loginBody: LoginUserSchema ) => {
  const user = loginValidator(await findUser({ email: loginBody.email }))

  if ( !await user.comparePassword(loginBody.password) ) {
    return trpcError("CONFLICT", "Password does not match")
  }

  return trpcSuccess(true, "Account validated")
}

export const coinWatchlistHandler = async( { user }: UserContext, coin: CryptoSymbolSchema ) => {
  
  if ( user.watchlist?.find(token => token===coin.symbol) ) {
    await updateUser(
      { email: user.email },
      {
        $pull: {
          watchlist: coin.symbol
        }
      }
    )

    return trpcSuccess(true, "Coin has been removed from watchlist")
  }

  await updateUser(
    { email: user.email },
    {
      $push: {
        watchlist: coin.symbol
      }
    }
  )

  return trpcSuccess(true, "Coin has been added to watchlist")
}
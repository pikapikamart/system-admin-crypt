import { LoginUserSchema, UserSchema } from "../schemas/user.schema";
import { 
  createUser, 
  findUser } from "../services/user.service";
import { 
  loginValidator,
  trpcError, 
  trpcSucess } from "./utils.controller";


export const signupUserHandler = async( signupBody: UserSchema ) => {
  const foundUser = await findUser({ email: signupBody.email })

  if ( foundUser ) {
    return trpcError("CONFLICT", "Email is already in use")
  }

  await createUser(signupBody)

  return trpcSucess(true, "Account has been created")
}

export const validateUserHandler = async( loginBody: LoginUserSchema ) => {
  const user = loginValidator(await findUser({ email: loginBody.email }))

  if ( !await user.comparePassword(loginBody.password) ) {
    return trpcError("CONFLICT", "Password does not match")
  }

  return trpcSucess(true, "Account validated")
}
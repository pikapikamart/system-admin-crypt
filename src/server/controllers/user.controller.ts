import { UserSchema } from "../schemas/user.schema";
import { 
  createUser, 
  findUser } from "../services/user.service";
import { 
  trpcError, 
  trpcSucess } from "./utils.controller";


export const signupUserHandler = async( user: UserSchema ) => {
  const foundUser = await findUser({ email: user.email })

  if ( foundUser ) {
    return trpcError("CONFLICT", "Email is already in use")
  }

  await createUser(user)

  return trpcSucess(true, "Account has been created")
}


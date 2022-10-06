import { MiddlewareResult } from "@trpc/server/src/internals/middlewares";
import { Context } from "../context";
import { loginValidator, trpcError } from "../controllers/utils.controller";
import { UserDocument } from "../models/user.model";
import { findUser } from "../services/user.service";


type TrpcNext = {
  (): Promise<MiddlewareResult<Context>>,
  <T>(opts: { ctx: T }): Promise<MiddlewareResult<T>>
};

export const isValidUser = async( ctx: Context, next: TrpcNext ) => {
 
  if ( !ctx.token ) {
    return trpcError("UNAUTHORIZED", "Login first")
  }

  const user = loginValidator(await findUser({ email: ctx.token.email }))

  return next({
    ctx: {
      ...ctx,
      user
    }
  })
}

export type UserContext = Context & {
  user: UserDocument
}
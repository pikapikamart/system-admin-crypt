import { TRPCError } from "@trpc/server";
import { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";


export const trpcError = (
  code: TRPC_ERROR_CODE_KEY,
  message: string
) => {
  throw new TRPCError({
    code,
    message
  })
}

export const trpcSucess = <T,>( success: boolean, data: T ) => {

  return {
    success,
    data
  }
}

export const loginValidator = <T,>( user: T ) => {
  if ( !user ) {
    return trpcError("NOT_FOUND", "No user found with this email")
  }

  return user
}
import { TRPCError } from "@trpc/server";
import { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";
import { customAlphabet } from "nanoid";


export const trpcError = (
  code: TRPC_ERROR_CODE_KEY,
  message: string
) => {
  throw new TRPCError({
    code,
    message
  })
}

export const trpcSuccess = <T,>( success: boolean, data: T ) => {

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

export const customNanoid = ( length: number ) => {
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")

  return nanoid(length)
}

export const postValidator = <T, >( post: T ) => {
  if ( !post ) {
    return trpcError("NOT_FOUND", "No post found with this post id")
  }

  return post
}
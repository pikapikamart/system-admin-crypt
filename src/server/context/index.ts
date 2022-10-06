/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getToken } from "next-auth/jwt"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
// export async function createContextInner(_opts: CreateContextOptions) {
//   return {};
// }

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext( ctx: trpcNext.CreateNextContextOptions ){
  // for API-response caching see https://trpc.io/docs/caching
  const { req, res } = ctx
  const token = await getToken(ctx)

  return {
    req,
    res,
    token
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
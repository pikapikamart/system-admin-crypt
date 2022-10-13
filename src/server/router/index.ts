import superjson from "superjson"
import { connectDatabase } from "../database"
import { coinRouter } from "../route/coin.route"
import { nftRouter } from "../route/nft.route"
import { postRouter } from "../route/post.route"
import { userRouter } from "../route/user.route"
import { createRouter } from "./createRouter"


export const appRouter = 
  createRouter()
  .transformer(superjson)
  .middleware(async({ next }) => {
    await connectDatabase()

    return next()
  })
  .merge("user.", userRouter)
  .merge("post.", postRouter)
  .merge("coin.", coinRouter)
  .merge("nft.", nftRouter)

  
export type AppRouter = typeof appRouter
import superjson from "superjson"
import { connectDatabase } from "../database"
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

export type Approuter = typeof appRouter
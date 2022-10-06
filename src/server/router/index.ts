import superjson from "superjson"
import { createRouter } from "./createRouter"


export const appRouter = 
  createRouter()
  .transformer(superjson)


export type Approuter = typeof appRouter
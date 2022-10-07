import { getAllCoinsHandler, getCoinHandler } from "../controllers/coin.controller";
import { createRouter } from "../router/createRouter";
import { coinIdSchema } from "../schemas/coin.schema";


export const coinRouter = createRouter()
  .query("get-all", {
    resolve: () => getAllCoinsHandler()
  })
  .query("get", {
    input: coinIdSchema,
    resolve: ({ input }) => getCoinHandler(input)
  })
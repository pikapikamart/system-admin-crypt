import { getAllCoinsHandler } from "../controllers/coin.controller";
import { createRouter } from "../router/createRouter";


export const coinRouter = createRouter()
  .query("get-all", {
    resolve: () => getAllCoinsHandler()
  })
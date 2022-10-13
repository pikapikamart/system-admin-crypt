import { isValidUser } from "../middlewares/route.middleware";
import { createRouter } from "../router/createRouter";
import { nftSchema } from "../schemas/nft.schema";


export const nftRouter = createRouter()
  .middleware(({ ctx, next }) => isValidUser(ctx, next))
  .mutation("create", {
    input: nftSchema,
    resolve: ( {ctx, input} ) => {}
  })
import { UserContext } from "../middlewares/route.middleware";
import { NFTSchema } from "../schemas/nft.schema";
import { createNftService, findNftService } from "../services/nft.service";
import { updateUserService } from "../services/user.service";
import { customNanoid, trpcError, trpcSuccess } from "./utils.controller";


export const createNFTHandler = async( { user }: UserContext, nft: NFTSchema ) =>{
  const foundNft = await findNftService({ name: nft.name })

  if ( foundNft ) {
    return trpcError("CONFLICT", "Nft project already created")
  }

  const createdNft = await createNftService(
    {
      ...nft,
      nftId: customNanoid(10),
      owner: user._id,
    }
  )

  await updateUserService(
    {
      username: user.username
    },
    {
      $push: {
        nfts: createdNft._id
      }
    }
  )

  return trpcSuccess(true, "NFT project promotion created")
}
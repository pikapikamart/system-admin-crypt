import { UserContext } from "../middlewares/route.middleware";
import { NFTSchema } from "../schemas/nft.schema";


export const createNFTHandler = async( { user }: UserContext, nft: NFTSchema ) =>{
  
}
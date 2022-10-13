import { DocumentDefinition, FilterQuery, ProjectionType } from "mongoose";
import { NFT, nftModel } from "../models/nft.model";


export const findNftService = async( 
  query: FilterQuery<NFT>,
  projection: ProjectionType<NFT> = "" ) => (
  nftModel.findOne(query, projection)
)

export const createNftService = async( nft: DocumentDefinition<NFT> ) => (
  nftModel.create(nft)
)
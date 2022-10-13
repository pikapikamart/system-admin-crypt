import { DocumentDefinition, FilterQuery, PopulateOptions, ProjectionType } from "mongoose";
import { NFT, nftModel } from "../models/nft.model";


export const findNftService = async( 
  query: FilterQuery<NFT>,
  projection: ProjectionType<NFT> = "" 
) => (
  nftModel.findOne(query, projection)
)

export const findNftServicePopulator = async( 
  query: FilterQuery<NFT>,
  projection: ProjectionType<NFT> = "" ,
  populate: PopulateOptions
) => (
  nftModel.findOne(query, projection).populate(populate)
)

export const createNftService = async( nft: DocumentDefinition<NFT> ) => (
  nftModel.create(nft)
)

export const findMultipleNftService = async(
  query: FilterQuery<NFT>,
  projection: ProjectionType<NFT>,
) => (
  nftModel.find(query, projection)
)

export const findMultipleNftServicePopulator = async(
  query: FilterQuery<NFT>,
  projection: ProjectionType<NFT>,
  populate: PopulateOptions
) => (
  nftModel.find(query, projection).populate(populate)
)
import mongoose from "mongoose"
import { NFTSchema } from "../schemas/nft.schema"


export type NFT = NFTSchema & {
  nftId: string,
  owner: string,
}

export type NFTDocument = NFT & mongoose.Document & {

}

const NFTSchema: mongoose.Schema<NFT> = new mongoose.Schema({
  nftId: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  isLive: Boolean,
  twitter: {
    type: String,
    required: true,
    unique: true
  },
  binance: String,
  website: String
})

const nftModel: mongoose.Model<NFTDocument> = mongoose.models.NFT || mongoose.model<NFTDocument>("NFT", NFTSchema)

export { nftModel }
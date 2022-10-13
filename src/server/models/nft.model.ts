import mongoose from "mongoose"
import { NFTSchema } from "../schemas/nft.schema"
import { UserDocument } from "./user.model"


export type NFT = NFTSchema & {
  nftId: string,
  owner: UserDocument["_id"],
}

export type NFTDocument = NFT & mongoose.Document & {

}

const nftSchema: mongoose.Schema<NFT> = new mongoose.Schema({
  nftId: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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

const nftModel: mongoose.Model<NFTDocument> = mongoose.models.NFT || mongoose.model<NFTDocument>("NFT", nftSchema)

export { nftModel }
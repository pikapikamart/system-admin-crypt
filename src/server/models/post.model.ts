import mongoose from "mongoose"
import { 
  Coin, 
  UserDocument } from "./user.model"


export type Post = {
  postId: string,
  owner: UserDocument["_id"],
  content: string,
  tags?: Coin[]
}

export type PostDocument = Post & mongoose.Document & {
  createAt: Date,
  updatedAt: Date
}

const postSchema: mongoose.Schema<PostDocument> = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    id: String,
    symbol: String,
    name: String
  }]
},{ timestamps: true })

const postModel: mongoose.Model<PostDocument> = mongoose.models.Post || mongoose.model<PostDocument>("Post", postSchema)

export{ postModel }
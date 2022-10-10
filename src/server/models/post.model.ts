import mongoose from "mongoose"
import { Coin } from "./user.model"


type Owner =  {
  username: string,
  email: string
}

export type Reply = {
  content: string,
  owner: Owner
}

export type Post = {
  postId: string,
  owner: Owner,
  content: string,
  isEdited?: boolean,
  tags?: Coin[],
  replies?: Reply[]
}

export type PostDocument = Post & mongoose.Document & {
  createdAt: Date,
  updatedAt: Date
}

const postSchema: mongoose.Schema<PostDocument> = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    username: String,
    email: String
  },
  content: {
    type: String,
    required: true
  },
  isEdited: Boolean,
  tags: [{
    id: String,
    symbol: String,
    name: String
  }],
  replies: [{
    content: String,
    owner: {
      username: String,
      email: String
    }
  }]
},{ timestamps: true })

const postModel: mongoose.Model<PostDocument> = mongoose.models.Post || mongoose.model<PostDocument>("Post", postSchema)

export{ postModel }
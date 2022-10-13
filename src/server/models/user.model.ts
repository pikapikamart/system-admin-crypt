import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { PostDocument } from "./post.model"
import { NFTDocument } from "./nft.model"


export type Coin = {
  id: string,
  symbol: string,
  name: string
}

export type User = {
  userId: string,
  fullname: string,
  username: string,
  email: string,
  password: string,
  bio?: string,
  watchlist?: Coin[],
  posts?: PostDocument["_id"][],
  nfts?: NFTDocument["_id"][]
}

export type UserDocument = User & mongoose.Document & {
  comparePassword: ( password: string ) => Promise<boolean>
}

const userSchema: mongoose.Schema<UserDocument> = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bio: String,
  watchlist: [{
    id: String,
    symbol: String,
    name: String
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  nfts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "NFT"
  }]
})

userSchema.pre("save", async function( next ){
  if ( !this.isModified("password") ) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash

  return next() 
})

userSchema.methods.comparePassword = async function(password: string) {
  
  try {
    return await bcrypt.compare(password, this.password)
  } catch( error ) {
    return false
  }
}

const userModel: mongoose.Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema)

export { userModel }
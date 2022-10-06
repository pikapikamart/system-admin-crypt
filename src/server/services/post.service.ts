import { DocumentDefinition } from "mongoose";
import { 
  Post, 
  postModel } from "../models/post.model";


export const createPostService = async( post: DocumentDefinition<Post> ) => (
  postModel.create(post)
)
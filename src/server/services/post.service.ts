import { 
  DocumentDefinition, 
  FilterQuery, 
  UpdateQuery} from "mongoose";
import { 
  Post, 
  postModel } from "../models/post.model";


export const createPostService = async( post: DocumentDefinition<Post> ) => (
  postModel.create(post)
)

export const updatePostService = async(
  query: FilterQuery<Post>,
  update: UpdateQuery<Post>
) => (
  postModel.findOneAndUpdate(query, update)
)

export const findPostService = ( post: FilterQuery<Post> ) => (
  postModel.findOne(post)
)
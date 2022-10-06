import { 
  DocumentDefinition, 
  FilterQuery, 
  UpdateQuery} from "mongoose";
import { 
  User, 
  userModel } from "../models/user.model";


export const findUser = async( user: FilterQuery<User> ) => (
  userModel.findOne(user)
)

export const createUser = async( user: DocumentDefinition<User> ) => (
  userModel.create(user)
)

export const updateUser = async(
  query: FilterQuery<User>,
  update: UpdateQuery<User>
) => (
  userModel.findOneAndUpdate(query, update)
)
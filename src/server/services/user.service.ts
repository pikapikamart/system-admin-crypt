import { 
  DocumentDefinition, 
  FilterQuery, 
  UpdateQuery} from "mongoose";
import { 
  User, 
  userModel } from "../models/user.model";


export const findUserService = async( user: FilterQuery<User> ) => (
  userModel.findOne(user)
)

export const createUserService = async( user: DocumentDefinition<User> ) => (
  userModel.create(user)
)

export const updateUserService = async(
  query: FilterQuery<User>,
  update: UpdateQuery<User>
) => (
  userModel.findOneAndUpdate(query, update)
)
import { 
  DocumentDefinition, 
  FilterQuery } from "mongoose";
import { 
  User, 
  userModel } from "../models/user.model";


export const findUser = async( user: FilterQuery<User> ) => (
  userModel.findOne(user)
)

export const createUser = async( user: DocumentDefinition<User> ) => (
  userModel.create(user)
)
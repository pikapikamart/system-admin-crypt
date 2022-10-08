import { 
  DocumentDefinition, 
  FilterQuery, 
  PopulateOptions, 
  QueryOptions,
  ProjectionType, 
  UpdateQuery} from "mongoose";
import { 
  User, 
  UserDocument, 
  userModel } from "../models/user.model";


export const findUserService = async( 
  user: FilterQuery<User>,
  projection: ProjectionType<User> = "",
  options: QueryOptions<User> = { lean: false } ) => (
  userModel.findOne(user, projection, options)
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
import { 
  createSlice,
  PayloadAction } from "@reduxjs/toolkit"
import { User } from "@/src/server/models/user.model"
import { Post } from "@/src/server/models/post.model"
import { RootState } from ".."


export type UserState = Omit<User, "email" | "password"> & {
  posts?: Post[]
}

const initialState: UserState = {
  userId: "",
  fullname: "",
  username: "",  
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: ( state, action: PayloadAction<UserState> ) =>{
      state = action.payload
    }
  }
})

export const {
  setUser
} = userSlice.actions
export const selectUser = ( state: RootState ) => state.user


export default userSlice.reducer
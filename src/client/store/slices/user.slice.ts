import { 
  createSlice,
  PayloadAction } from "@reduxjs/toolkit"
import { 
  Coin, 
  User } from "@/src/server/models/user.model"
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

      return state
    },
    toggleWatchlist: ( state, action: PayloadAction<Coin> ) =>{
      if ( state.watchlist?.find(coin => coin.id===action.payload.id) ) {
        state.watchlist = state.watchlist.filter(coin => coin.id!==action.payload.id)
      } else {
        state.watchlist = state.watchlist?.concat([action.payload])
      }
    }
  }
})

export const {
  setUser,
  toggleWatchlist
} = userSlice.actions
export const selectUser = ( state: RootState ) => state.user
export const selectCoinWatchlist = ( state: RootState ) => state.user.watchlist

export default userSlice.reducer
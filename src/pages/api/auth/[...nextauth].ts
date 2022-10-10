import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import { connectDatabase } from "@/src/server/database";
import { findUserService } from "@/src/server/services/user.service";


export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
          label: "email"
        },
        password: {
          type: "password",
          label: "password"
        }
      },
      authorize: async( credentials, req ) => {
        const user = { 
          ...credentials,
          username: "",
          userId: ""
        }
        await connectDatabase()
        const foundUser = await findUserService({ email: user.email })

        if ( !foundUser || !await foundUser.comparePassword(user.password as string) ) {
          return Promise.reject(new Error("Please check your credentials"))
        }
        
        user.username = foundUser.username
        user.userId = foundUser.userId
        const { password, ...userRest } = user
      
        return userRest
      }
    })
  ],
  callbacks: {
    jwt: async({ token, user }) => {
      
      if ( user ) {
        token.email = user.email
        token.username = user.username as string
        token.userId = user.userId as string
      }

      return token
    },
    session: async({ token, session }) => {

      const newSession = {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          email: token.email,
          userId: token.userId
        }
      }

      return newSession
    }
  }
}


export default NextAuth(nextAuthOptions)
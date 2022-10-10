import { UserProfile } from "@/components/user"
import { connectDatabase } from "@/src/server/database"
import { User } from "@/src/server/models/user.model"
import { findAllPostAggregator } from "@/src/server/services/post.service"
import { findUserService } from "@/src/server/services/user.service"
import { 
  GetServerSideProps, 
  InferGetServerSidePropsType, 
  NextPage } from "next"
import { getToken } from "next-auth/jwt"


const EmailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {

  if ( !user ) {
    return <></>
  }

  return (
    <UserProfile user={ user } />
  )
}


export const getServerSideProps: GetServerSideProps = async( context ) => {
  await connectDatabase()
  const { username } = context.query
  const token = await getToken({ req: context.req })
  
  const foundUser = await findUserService(
    { username: username },
    "-_id -post",
    { lean: true }
  )

  if ( !foundUser ) {

    return {
      redirect: {
        destination: "/communities",
        permanent: false
      }
    }
  }
  const posts = await findAllPostAggregator([
    {
      $match: {
        "owner.username": foundUser.username
      }
    },
    {
      $set: {
        replies: {
          $size: "$replies"
        }
      }
    }
  ])

  foundUser.posts = posts

  if ( !token ) {
    foundUser.watchlist = undefined
  }

  if ( token && token.username!==foundUser.username ) {
    foundUser.watchlist = undefined
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(foundUser)) as User
    }
  }
}

export default EmailPage
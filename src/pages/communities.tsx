import { Communities } from "@/components/communities";
import { 
  GetServerSideProps,
  GetServerSidePropsContext, 
  InferGetServerSidePropsType, 
  NextPage } from "next";
import { connectDatabase } from "../server/database";
import { Post } from "../server/models/post.model";
import { findAllPostAggregator } from "../server/services/post.service";


export type PostCreation = Post & {
  createdAt: Date,
  updatedAt: Date
}

const CommunitiesPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = ({ posts }) => {
  
  return (
    <Communities posts={ posts } />
  )
}

export const getServerSideProps = async( context: GetServerSidePropsContext ) =>{
  await connectDatabase()
  const posts = await findAllPostAggregator([
    {
      $project: {
        _id: 0
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

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)) as PostCreation[]
    }
  }
}


export default CommunitiesPage

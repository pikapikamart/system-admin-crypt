import { PostMain } from "@/components/posts/post";
import { connectDatabase } from "@/src/server/database";
import { Post } from "@/src/server/models/post.model";
import { 
  findAllPostIds, 
  findPostService } from "@/src/server/services/post.service";
import { 
  GetStaticPaths, 
  GetStaticPropsContext, 
  InferGetStaticPropsType, 
  NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostCreation } from "../communities";


const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) =>{

  if ( !post ) {
    return <></>
  }

  return (
    <PostMain post={ post } />
  )
}

type PathParams = {
  params: {
    post: string
  }
}

export const getStaticPaths: GetStaticPaths = async() =>{
  await connectDatabase()
  const posts = await findAllPostIds()
  const postsIds = posts.reduce((accu, curr) =>{
    accu.push({
      params: {
        post: curr.postId
      }
    })
    
    return accu
  }, [] as PathParams[])

  return {
    paths: postsIds,
    fallback: false
  }
}

type PostParam = ParsedUrlQuery & {
  post: string
}

export const getStaticProps = async( context: GetStaticPropsContext ) => {
  await connectDatabase()
  const { post } = context.params as PostParam
  const singlePost = await findPostService({ postId: post })

  return {
    props: {
      post: JSON.parse(JSON.stringify(singlePost)) as PostCreation
    }
  }
}


export default PostPage
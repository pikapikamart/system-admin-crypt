import { PostEdit } from "@/components/edit/post";
import { useSetupUser } from "@/lib/hooks";
import { connectDatabase } from "@/src/server/database";
import { 
  findAllPostIds, 
  findPostService } from "@/src/server/services/post.service";
import { 
  GetStaticPaths, 
  GetStaticPropsContext, 
  InferGetStaticPropsType, 
  NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { PostCreation } from "../communities";


const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) =>{
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/communities")
    }
  })
  const { user } = useSetupUser()

  const isOwned = () =>{
    return 
  }

  useEffect(() =>{
    if ( user && !user.posts?.find(singlepost => singlepost.postId===post.postId) ) {
      router.replace("/communities")
    }
  }, [ user ])

  if ( !post ) {
    return <></>
  }

  if ( 
    status==="loading" ||
    !post ||
    !user ||
    !user.posts?.find(singlepost => singlepost.postId===post.postId)
   ) {
    return <></>
  }

  return (
    <PostEdit post={ post } />
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

export const getStaticProps = async( context: GetStaticPropsContext ) =>{
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
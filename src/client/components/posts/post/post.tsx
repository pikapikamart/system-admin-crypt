import { ReplyForm } from "@/components/collections/form/reply"
import { ParentModal } from "@/components/collections/modal"
import { DeletePostModal } from "@/components/collections/modal/post/delete"
import { 
  PostDropdownItem, 
  PostDropdownList, 
  PostOptions } from "@/components/collections/post/post.styled"
import { compareDate } from "@/components/collections/post/post.utils"
import { useExpansion, useSetupUser } from "@/lib/hooks"
import { PostCreation } from "@/pages/communities"
import { BlockLink, SrOnly } from "@/styled/shared/helpers"
import Link from "next/link"
import { useState } from "react"
import { CommentsSection } from "./comments"
import { 
  PostWrapper,
  ContentContainer,
  PostContentContainer,
  PostOwnerName,
  PostContent,
  PostTagsList,
  PostTagItem,
  PostDate,
  PostOptionsContainer
 } from "./post.styled"


type PostProps = {
  post: PostCreation
}

const Post = ({ post }: PostProps) =>{
  const { isExpanded, handleExpansion } = useExpansion()
  const { user } = useSetupUser()
  const [ deletePost, setDeletePost ] = useState(false)

  const cancelPostDelete = () =>{
    setDeletePost(false)
  }

  const handleDeletePost = () =>{
    setDeletePost(true)
  }

  return (
    <>
      { deletePost && (
        <ParentModal exit={ cancelPostDelete }>
          <DeletePostModal
            exit={ cancelPostDelete }
            postId={ post.postId } />
        </ParentModal>
      ) }
      <PostWrapper>
        <SrOnly>{post.owner.username}'s post</SrOnly>
        <ContentContainer>
          <PostContentContainer>
            <PostOwnerName>
              { post.owner.username }
              <span>@{ post.owner.email }</span>
            </PostOwnerName>
            <PostContent>{ post.content }</PostContent>
            <PostTagsList>
              { post.tags?.map(tag => (
                <PostTagItem key={ tag.id }>{ tag.symbol }</PostTagItem>
              )) }
            </PostTagsList>
            <PostDate>
              { new Date(post.createdAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }
              { compareDate(post.createdAt, post.updatedAt)? "" : " (edited)" }
            </PostDate>
            { user.posts?.find(singlePost => singlePost.postId===post.postId) && (
              <PostOptionsContainer>
                <PostOptions
                  aria-expanded={ isExpanded }
                  onClick={ handleExpansion }>
                    <SrOnly>Post options</SrOnly>
                </PostOptions>
                <PostDropdownList as="ul">
                  <PostDropdownItem>
                    <Link
                      href={ `/edit/${ post.postId }` }
                      passHref>
                      <BlockLink>Edit</BlockLink>
                    </Link>
                  </PostDropdownItem>
                  <PostDropdownItem>
                    <button onClick={ handleDeletePost }>Delete</button>
                  </PostDropdownItem>
                </PostDropdownList>
              </PostOptionsContainer>
            ) }
          </PostContentContainer>
          <ReplyForm postId={ post.postId } />
          <CommentsSection comments={ post.replies?? [] }/>
        </ContentContainer>
      </PostWrapper>
    </>
  )
}


export default Post
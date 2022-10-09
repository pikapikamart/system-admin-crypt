import { useExpansion } from "@/lib/hooks"
import { PostCreation } from "@/pages/communities"
import { BlockLink, SrOnly } from "@/styled/shared/helpers"
import Link from "next/link"
import { useState } from "react"
import { ParentModal } from "../modal"
import { DeletePostModal } from "../modal/post/delete"
import { 
  PostWrapper,
  PostLink,
  PostHeader,
  PostUser,
  PostDate,
  PostContent,
  PostTagsList,
  PostTagsItem,
  PostComments,
  PostOptions,
  PostDropdownList,
  PostDropdownItem
 } from "./post.styled"
import { 
  compareDate, 
  formatDate } from "./post.utils"


type PostProps = {
  post: PostCreation,
  isOwned: boolean
}

const Post = ({ post, isOwned }: PostProps) =>{
  const { isExpanded, handleExpansion } = useExpansion()
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
        <Link
          href={ `/posts/${ post.postId }` }
          passHref>
          <PostLink />
        </Link>
        <PostHeader>
          <PostUser>
            { post.owner.username}
            <span>@{ post.owner.email }</span>
          </PostUser>
          <PostDate>
            { formatDate(post.createdAt) }
            { compareDate(post.createdAt, post.updatedAt)? "" : " (edited)" }
          </PostDate>
        </PostHeader>
        <PostContent>{ post.content }</PostContent>
        <PostTagsList as="ul">
          { post.tags?.map( tag => (
            <PostTagsItem key={ tag.id } >{ tag.symbol }</PostTagsItem>
          )) }
        </PostTagsList>
        <PostComments>
          <p>{ (post.replies as never) as string  }</p>
          { isOwned && (
            <>
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
            </>
          ) }
        </PostComments>
      </PostWrapper>
    </>
  )
}


export default Post
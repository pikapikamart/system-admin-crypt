import { useSetupUser } from "@/lib/hooks"
import { trpc } from "@/lib/trpc"
import { PostCreation } from "@/pages/communities"
import { SrOnly } from "@/styled/shared/helpers"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PostForm } from "../collections/form/post"
import { ParentModal } from "../collections/modal"
import { DeleteModal } from "../collections/modal/post/delete"
import { 
  ContentContainer, 
  MainWrapper,
  FeedsWrapper,
  MainHeading,
  FeedsList,
  FeedsListItem,
  FeedsItemHeader,
  FeedsItemUser,
  FeedsItemDate,
  FeedsItemContent,
  FeedsItemTagsList,
  FeedsItemTag,
  FeedsItemComments,
  FeedsItemLink,
  FeedsItemOptions,
  FeedsItemDropdown,
  FeedsDropdownItem
 } from "./communities.styled"


export const formatDate = ( dateString: Date ) =>{
  const date = new Date(dateString)
  const month = date.toLocaleDateString(undefined, { month: "short" })
  const day = date.getDate()
  const year = date.getFullYear()
  const processedDate = `${ month } ${ day }, ${ year }`

  return processedDate
}

export const compareDate = ( date1: Date, date2: Date ) => {
  const newDate1 = new Date(date1)
  const newDate2 = new Date(date2)

  return newDate1.getTime()===newDate2.getTime()
}

type CommunitiesProps = {
  posts: PostCreation[]
}

const Communities = ({ posts }: CommunitiesProps) =>{
  const { user } = useSetupUser()
  const router = useRouter()
  const mutation = trpc.useMutation(["post.delete"])
  const [ deletePost, setDeletePost ] = useState<PostCreation | null>(null)
  const [ editPost, setEditPost ] = useState<PostCreation | null>(null)

  const handleDeleteConfirmation = () =>{
    if ( !deletePost ) {
      return 
    }

    mutation.mutate({
      postId: deletePost.postId
    })
  }

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  return (
    <>
      { deletePost && (
        <ParentModal exit={ () => setDeletePost(null) }>
          <DeleteModal
            exit={ () => setDeletePost(null) } 
            handleDeleteConfirmation={ handleDeleteConfirmation } />
        </ParentModal>
      ) }
      <MainWrapper>
        <ContentContainer>
          <PostForm />
          <FeedsWrapper>
            <MainHeading>Top Community Feeds</MainHeading>
            <FeedsList>
              { posts?.map(post => (
                <FeedsListItem key={ post.postId }>
                  <Link
                    href={ "/posts/" + post.postId }
                    passHref>
                    <FeedsItemLink />
                  </Link>
                  <FeedsItemHeader>
                    <FeedsItemUser>
                      { post.owner.username}
                      <span>@{ post.owner.email }</span>
                    </FeedsItemUser>
                    <FeedsItemDate>
                      { formatDate(post.createdAt) }
                      { compareDate(post.createdAt, post.updatedAt)? "" : " (edited)" }
                    </FeedsItemDate>
                  </FeedsItemHeader>
                  <FeedsItemContent>
                    { post.content }
                  </FeedsItemContent>
                  <FeedsItemTagsList as="ul">
                    { post.tags?.map(tag => (
                      <FeedsItemTag key={ tag.id }>
                        { tag.symbol }
                      </FeedsItemTag>
                    )) }
                  </FeedsItemTagsList>
                  <FeedsItemComments>
                    <p>{ (post.replies as never) as string  }</p>
                    { user.posts?.find(singlePost => singlePost.postId===post.postId) && (
                      <>
                        <FeedsItemOptions
                          onClick={ event => {
                            const button = event.currentTarget

                            if ( button.getAttribute("aria-expanded")==="true" ) {
                              button.setAttribute("aria-expanded", "false")
                            } else {
                              button.setAttribute("aria-expanded", "true")
                            }
                          } }>
                          <SrOnly>Post options</SrOnly>
                        </FeedsItemOptions>
                        <FeedsItemDropdown as="ul">
                          <FeedsDropdownItem>
                            <button>Edit</button>
                          </FeedsDropdownItem>
                          <FeedsDropdownItem>
                            <button onClick={ () => setDeletePost(post) }>Delete</button>
                          </FeedsDropdownItem>
                        </FeedsItemDropdown>
                      </>
                    ) }
                  </FeedsItemComments>
                </FeedsListItem>
              )) }
            </FeedsList>
          </FeedsWrapper>
        </ContentContainer>
      </MainWrapper>
    </>
  )
}


export default Communities
import { PostCreation } from "@/pages/communities"
import Link from "next/link"
import { PostForm } from "../collections/form/post"
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
  FeedsItemLink
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

  return (
    <MainWrapper>
      <ContentContainer>
        <PostForm />
        <FeedsWrapper>
          <MainHeading>Top Community Feeds</MainHeading>
          <FeedsList>
            { posts?.map(post => (
              <FeedsListItem key={ post.postId }>
                <Link
                  href={ "/posts" + post.postId }
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
                </FeedsItemComments>
              </FeedsListItem>
            )) }
          </FeedsList>
        </FeedsWrapper>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Communities
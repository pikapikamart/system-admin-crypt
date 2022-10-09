import { ReplyForm } from "@/components/collections/form/reply"
import { compareDate } from "@/components/communities/communities"
import { PostCreation } from "@/pages/communities"
import { SrOnly } from "@/styled/shared/helpers"
import { CommentsSection } from "./comments"
import { 
  PostWrapper,
  ContentContainer,
  PostContentContainer,
  PostOwnerName,
  PostContent,
  PostTagsList,
  PostTagItem,
  PostDate
 } from "./post.styled"


type PostProps = {
  post: PostCreation
}

const Post = ({ post }: PostProps) =>{

  return (
    <PostWrapper>
      <SrOnly>{post.owner.username}'s post</SrOnly>
      <ContentContainer>
        <PostContentContainer>
          <PostOwnerName>
            { post.owner.username }
            <span>{ post.owner.email }</span>
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
        </PostContentContainer>
        <ReplyForm postId={ post.postId } />
        <CommentsSection comments={ post.replies?? [] }/>
      </ContentContainer>
    </PostWrapper>
  )
}


export default Post
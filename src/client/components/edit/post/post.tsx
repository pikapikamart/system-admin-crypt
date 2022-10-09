import { PostForm } from "@/components/collections/form/post"
import { CommentsSection } from "@/components/posts/post/comments"
import { 
  PostWrapper,
  ContentContainer
 } from "@/components/posts/post/post.styled"
import { PostCreation } from "@/pages/communities"
import { SrOnly } from "@/styled/shared/helpers"


type PostProps = {
  post: PostCreation
}

const Post = ({ post }: PostProps) =>{

  return (
    <PostWrapper>
      <SrOnly>{ post.owner.username }'s post</SrOnly>
      <ContentContainer>
        <PostForm 
          content={ post.content }
          selectedCoins={ post.tags?? [] } 
          postId={ post.postId } />
        <CommentsSection comments={ post.replies?? [] }/>
      </ContentContainer>
    </PostWrapper>
  )
}


export default Post
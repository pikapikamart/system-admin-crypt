import { useSetupUser } from "@/lib/hooks"
import { PostCreation } from "@/pages/communities"
import { PostForm } from "../collections/form/post"
import { SinglePost } from "../collections/post"
import { 
  ContentContainer, 
  MainWrapper,
  FeedsWrapper,
  MainHeading,
  FeedsList
 } from "./communities.styled"


type CommunitiesProps = {
  posts: PostCreation[]
}

const Communities = ({ posts }: CommunitiesProps) =>{
  const { user } = useSetupUser()

  return (
    <MainWrapper>
      <ContentContainer>
        <PostForm />
        <FeedsWrapper>
          <MainHeading>Top Community Feeds</MainHeading>
          <FeedsList>
            { posts?.map(post => (
              <SinglePost
                key={ post.postId }
                post={ post }
                isOwned={ user.posts?.find(ownedPost => ownedPost.postId===post.postId) } />
            )) }
          </FeedsList>
        </FeedsWrapper>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Communities
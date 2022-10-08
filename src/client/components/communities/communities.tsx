import { Post } from "@/src/server/models/post.model"
import { PostForm } from "../collections/form/post"
import { 
  ContentContainer, 
  MainWrapper } from "./communities.styled"


type CommunitiesProps = {
  posts: Post[]
}

const Communities = ({ posts }: CommunitiesProps) =>{

  return (
    <MainWrapper>
      <ContentContainer>
        <PostForm />
      </ContentContainer>
    </MainWrapper>
  )
}


export default Communities
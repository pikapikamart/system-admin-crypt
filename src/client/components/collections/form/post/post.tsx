import { useSetupUser } from "@/lib/hooks";
import { trpc } from "@/lib/trpc";
import { Coin } from "@/src/server/models/user.model";
import { InputError } from "../../input/input.styled";
import { 
  PostWrapper,
  CurrentUser,
  PostTextarea,
  PostTextareaWrapper,
  PostTagSubmit,
  PostContentContainer,
 } from "./post.styled"
import { PostTags } from "./tags";


type PostProps = {
  content?: string,
  selectedCoins?: Coin[]
}

const Post = ({ content, selectedCoins }: PostProps) => {
  const { user } = useSetupUser()
  const query = trpc.useQuery(["coin.get-names"])

  return (
    <PostWrapper onSubmit={ event => event.preventDefault() }>
      <PostContentContainer>
        <CurrentUser>{ user.username? user.username : "Guest" }</CurrentUser>
        <PostTextareaWrapper>
          <PostTextarea
            rows={ 6 } 
            placeholder="How do you feel about the market today? Share your ideas" />
          <InputError>Please enter a value</InputError>
        </PostTextareaWrapper>
        <PostTags coins={ query.data?.data?? [] } selectedCoins={ [] } />
        <PostTagSubmit type="submit">Post
        </PostTagSubmit>
      </PostContentContainer>
    </PostWrapper>
  )
}


export default Post;
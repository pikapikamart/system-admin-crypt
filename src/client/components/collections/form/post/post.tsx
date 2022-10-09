import { useSetupUser } from "@/lib/hooks";
import { trpc } from "@/lib/trpc";
import { Coin } from "@/src/server/models/user.model";
import { useRouter } from "next/router";
import { 
  useEffect,
  useRef, 
  useState } from "react";
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
  selectedCoins?: Coin[],
  postId?: string
}

const Post = ({ content, selectedCoins, postId }: PostProps) => {
  const { user } = useSetupUser()
  const router = useRouter()
  const query = trpc.useQuery(["coin.get-names"])
  const [ postTags, setPostTags ] = useState<Coin[]>(selectedCoins?? [])
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const mutation = trpc.useMutation(["post.create"])
  const editMutation = trpc.useMutation(["post.edit"])

  const addCoinTag = ( coinTag: Coin ) => {
    setPostTags(prev => prev.concat([coinTag]))
  }

  const removeCoinTag = ( coinTag: Coin ) => {
    setPostTags(prev => prev.filter(tag => tag.id!==coinTag.id))
  }

  const handlePostSubmit = ( event: React.FormEvent ) => {
    event.preventDefault()

    if ( !user.userId ||!textAreaRef.current  ) {
      return
    }

    if ( content ) {
      editMutation.mutate({
        postId: postId as string,
        content: textAreaRef.current.value,
        tags: postTags
      })

      return
    }

    mutation.mutate({
      content: textAreaRef.current.value,
      tags: postTags
    })
  }

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  useEffect(() =>{
    if ( editMutation.isSuccess ) {
      router.replace("/posts/" + postId as string)
    }
  }, [ editMutation.isSuccess ])
 
  return (
    <PostWrapper onSubmit={ handlePostSubmit }>
      <PostContentContainer aria-hidden={ user.userId==="" }>
        <CurrentUser>{ user.username? user.username : (<>Guest<span>( login first )</span></>) }</CurrentUser>
        <PostTextareaWrapper>
          <PostTextarea
            ref={ textAreaRef }
            rows={ 6 } 
            defaultValue={ content?? "" }
            placeholder="How do you feel about the market today? Share your ideas" />
          <InputError>Please enter a value</InputError>
        </PostTextareaWrapper>
        <PostTags
          addCoinTag={ addCoinTag }
          removeCoinTag={ removeCoinTag } 
          coins={ query.data?.data?? [] } 
          selectedTags={ postTags } />
        <PostTagSubmit 
          available={ user.userId!=="" }
          type="submit">{ content? "Update" : "Post" }
        </PostTagSubmit>
      </PostContentContainer>
    </PostWrapper>
  )
}


export default Post;
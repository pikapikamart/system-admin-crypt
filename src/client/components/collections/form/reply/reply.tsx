import { useSetupUser } from "@/lib/hooks";
import { trpc } from "@/lib/trpc";
import { useRouter } from "next/router";
import { 
  useEffect, 
  useRef } from "react";
import { CurrentUser } from "../post/post.styled";
import { 
  ReplyWrapper,
  ReplyTextareaWrapper,
  ReplyTextarea,
  ReplyPostSubmit
 } from "./reply.styled";


type ReplyProps = {
  postId: string
}

const Reply = ({ postId }: ReplyProps) =>{
  const router = useRouter()
  const { user } = useSetupUser()
  const mutation = trpc.useMutation(["post.reply"])
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleFormReply = ( event: React.FormEvent ) =>{
    event.preventDefault()

    if ( !user.userId || !textareaRef.current ) {
      return 
    }

    mutation.mutate({
      postId,
      content: textareaRef.current.value
    })
  } 

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  return (
    <ReplyWrapper 
      as="form"
      onSubmit={ handleFormReply }>
      <CurrentUser>{ user.username? user.username : (<>Guest<span>( login first )</span></>) }</CurrentUser>
      <ReplyTextareaWrapper>
        <ReplyTextarea
          ref={ textareaRef }
          rows={ 4 }
          placeholder="Reply to this post" />
      </ReplyTextareaWrapper>
      <ReplyPostSubmit
        available={ user.userId!=="" }
        type="submit">Reply
      </ReplyPostSubmit>
    </ReplyWrapper>
  )
}


export default Reply;
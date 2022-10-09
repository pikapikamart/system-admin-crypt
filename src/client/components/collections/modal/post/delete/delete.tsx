import { 
  FormDescription, 
  FormOption, 
  FormOptions, 
  FormWrapper } from "@/components/collections/form/form.styled"
import { trpc } from "@/lib/trpc"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { 
  ChildModal, 
  ModalHeading } from "../../modal.styled"


type DeleteProps = {
  exit: () => void,
  postId: string
}

const Delete = ({ exit, postId }: DeleteProps) =>{
  const mutation = trpc.useMutation(["post.delete"])
  const router = useRouter()

  const handlePostDeletion = ( event: React.FormEvent ) =>{
    event.preventDefault()

    mutation.mutate({
      postId
    })
  }

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      if ( router.query.post ) {
        router.replace("/communities")
      } else {
        router.reload()
      }
    }
  }, [ mutation.isSuccess ])

  return(
    <ChildModal>
      <ModalHeading
        align="center"
        id="modal-heading">Continue deleting this post?
      </ModalHeading>
      <FormWrapper 
        as="form"
        onSubmit={ handlePostDeletion }>
        <FormDescription>This will remove the post as well  all the replies made to it</FormDescription>
        <FormOptions>
          <FormOption
            colored="red"
            type="submit">Delete post</FormOption>
          <FormOption 
            onClick={ exit }
            type="button">Close</FormOption>
        </FormOptions>
      </FormWrapper>
    </ChildModal>
  )
}


export default Delete
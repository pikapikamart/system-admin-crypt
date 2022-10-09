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

  const handlePostDeletion = () =>{
    mutation.mutate({
      postId
    })
  }

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  return(
    <ChildModal>
      <ModalHeading
        align="center"
        id="modal-heading">Continue deleting this post?
      </ModalHeading>
      <FormWrapper as="form">
        <FormDescription>This will remove the post as well  all the replies made to it</FormDescription>
        <FormOptions>
          <FormOption
            colored="red"
            onClick={ handlePostDeletion }>Delete post</FormOption>
          <FormOption onClick={ exit }>Close</FormOption>
        </FormOptions>
      </FormWrapper>
    </ChildModal>
  )
}


export default Delete
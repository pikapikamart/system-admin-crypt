import { 
  FormDescription, 
  FormOption, 
  FormOptions, 
  FormWrapper } from "@/components/collections/form/form.styled"
import { 
  ChildModal, 
  ModalHeading } from "../../modal.styled"


type DeleteProps = {
  handleDeleteConfirmation: () => void,
  exit: () => void
}

const Delete = ({ handleDeleteConfirmation, exit }: DeleteProps) =>{

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
            onClick={ handleDeleteConfirmation }
            colored="red">Delete post</FormOption>
          <FormOption onClick={ exit }>Close</FormOption>
        </FormOptions>
      </FormWrapper>
    </ChildModal>
  )
}


export default Delete
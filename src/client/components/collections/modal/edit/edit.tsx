import { EditForm } from "../../form/edit"
import { 
  ChildModal, 
  ModalHeading } from "../modal.styled"


type EditProps = {
  exit: () => void
}

const Edit = ({ exit }: EditProps) =>{

  return (
    <ChildModal>
      <ModalHeading 
        align="left"
        id="modal-heading">Edit Profile
      </ModalHeading>
      <EditForm />
    </ChildModal>
  )
}


export default Edit
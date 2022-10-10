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
        id="modal-heading">

      </ModalHeading>
    </ChildModal>
  )
}


export default Edit
import { PromoteNftForm } from "../../form/promote"
import { ChildModal, ModalHeading } from "../modal.styled"


type PromoteProps = {
  exit: () => void
}

const Promote = ({ exit }: PromoteProps) =>{

  return (
    <ChildModal>
      <ModalHeading
        align="left"
        id="modal-heading">Promote your nft
      </ModalHeading>
      <PromoteNftForm exit={ exit } />
    </ChildModal>
  )
}


export default Promote
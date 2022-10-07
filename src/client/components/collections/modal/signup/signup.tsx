import { SignupForm } from "@/components/collections/form/signup"
import { 
  ChildModal,
  ModalHeading } from "../modal.styled"


type SignupProps = {
  exit: () => void
}

const Signup = ( { exit }: SignupProps ) => {

  return (
    <ChildModal>
      <ModalHeading
        align="center" 
        id="modal-heading">Create your account
      </ModalHeading>
      <SignupForm exit={ exit }/>
    </ChildModal>
  )
}


export default Signup
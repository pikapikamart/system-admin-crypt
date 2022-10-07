import { LoginForm } from "../../form/login"
import { 
  ChildModal, 
  ModalHeading } from "../modal.styled"


type LoginProps = {
  exit: () => void
}

const Login = ( { exit }: LoginProps ) =>{

  return (
    <ChildModal>
      <ModalHeading
        align="center"
        id="modal-heading">Welcome back!
      </ModalHeading>
      <LoginForm exit={ exit } />
    </ChildModal>
  )
}


export default Login
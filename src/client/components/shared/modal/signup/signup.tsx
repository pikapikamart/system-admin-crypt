import { useFormValidation } from "@/lib/hooks"
import { InputField } from "../../input"
import { 
  ChildModal, 
  ModalFormHeading } from "../modal.styled"
import { 
  SignupForm, 
  SignupOption, 
  SignupOptions } from "./signup.styled"


type SignupProps = {
  exit: () => void
}

const Signup = ( { exit }: SignupProps ) => {
  const { 
    isValidData,
    addFieldRef,
    handleFormSubmit } = useFormValidation()

  return (
    <ChildModal>
      <SignupForm 
        as="form"
        noValidate
        onSubmit={ handleFormSubmit }>
          <ModalFormHeading id="modal-heading">Create your account</ModalFormHeading>
          <div>
            <InputField
              labelText="Fullname"
              name="fullname"
              type="text"
              addFieldRef={ addFieldRef } />
              <InputField
              labelText="Username"
              name="username"
              type="text"
              addFieldRef={ addFieldRef } />
              <InputField
              labelText="Email"
              name="email"
              type="text"
              addFieldRef={ addFieldRef } />
              <InputField
              labelText="Password"
              name="password"
              type="password"
              addFieldRef={ addFieldRef } />
          </div>
          <SignupOptions>
            <SignupOption
              colored={ true } 
              type="submit">Sign up
            </SignupOption>
            <SignupOption 
              colored={ false }
              type="button"
              onClick={ exit }>Close
            </SignupOption>
          </SignupOptions>
      </SignupForm>
    </ChildModal>
  )
}


export default Signup
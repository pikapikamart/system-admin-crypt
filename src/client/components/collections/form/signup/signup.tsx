import { InputField } from "@/components/collections/input"
import { useSignup } from "@/lib/hooks"
import { FormOption, FormOptions } from "../form.styled"
import { SignupFormWrapper } from "./signup.styled"


type SignupProps = {
  exit: () => void
}

const Signup = ( { exit }: SignupProps ) => {
  const {
    addFieldRef,
    handleFormSubmit
  } = useSignup()

  return (
    <SignupFormWrapper 
      as="form"
      noValidate
      onSubmit={ handleFormSubmit }>
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
        <FormOptions>
          <FormOption
            colored="darkBlue"
            type="submit">Sign up
          </FormOption>
          <FormOption 
            type="button"
            onClick={ exit }>Close
          </FormOption>
        </FormOptions>
    </SignupFormWrapper>
  )
}


export default Signup
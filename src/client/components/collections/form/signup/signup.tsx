import { InputField } from "@/components/collections/input"
import { useSignup } from "@/lib/hooks"
import { trpc } from "@/lib/trpc"
import { 
  SignupFormWrapper, 
  SignupOption, 
  SignupOptions } from "./signup.styled"


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
    </SignupFormWrapper>
  )
}


export default Signup
import { useLogin } from "@/lib/hooks"
import { InputField } from "../../input"
import { 
  FormOptions,
  FormOption } from "../form.styled"
import { LoginFormWrapper } from "./login.styled"


type LoginProps = {
  exit: () => void
}

const Login = ( { exit }: LoginProps ) =>{
  const {
    addFieldRef,
    handleFormSubmit
  } = useLogin()

  return (
    <LoginFormWrapper
      as="form"
      noValidate
      onSubmit={ handleFormSubmit }>
        <div>
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
            type="submit">Login
          </FormOption>
          <FormOption 
            type="button"
            onClick={ exit }>Close
          </FormOption>
        </FormOptions>
    </LoginFormWrapper>
  )
}


export default Login
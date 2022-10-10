import { useFormValidation, useSetupUser } from "@/lib/hooks"
import { trpc } from "@/lib/trpc"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { InputField } from "../../input"
import { InputContainer, InputLabel } from "../../input/input.styled"
import { FormOption, FormOptions } from "../form.styled"
import { EditFormWrapper, EditTextarea } from "./edit.styled"


const Edit = () =>{
  const {
    isValidData,
    addFieldRef,
    getFieldsRef,
    handleFormSubmit
  } = useFormValidation()
  const { user } = useSetupUser()
  const router = useRouter()
  const mutation = trpc.useMutation(["user.update-profile"])
  const bioRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() =>{
    if ( isValidData ) {
      if ( !bioRef.current ) {
        return
      }

      const usernameInput = getFieldsRef()[0]

      mutation.mutate({
        username: usernameInput.value,
        bio: bioRef.current.value
      })
    }
  }, [ isValidData ])

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  return (
    <EditFormWrapper 
      as="form"
      onSubmit={ handleFormSubmit }>
      <div>
        <InputField
          labelText="Username"
          name="username"
          type="text"
          defaultValue={ user.username }
          addFieldRef={ addFieldRef }
        />
        <InputContainer>
          <InputLabel htmlFor="bio">Bio</InputLabel>
          <EditTextarea
            as="textarea"
            id="bio"
            name="bio"
            defaultValue={ user.bio?? "" }
            rows={ 5 }
            ref={ bioRef } />
        </InputContainer>
      </div>
      <FormOptions>
        <FormOption
          colored="blue"
          type="submit">
          Save and exit
        </FormOption>
      </FormOptions>
    </EditFormWrapper>
  )
}


export default Edit
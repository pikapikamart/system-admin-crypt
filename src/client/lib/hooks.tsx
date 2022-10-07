import { UserSchema } from "@/src/server/schemas/user.schema"
import { signIn } from "next-auth/react"
import { 
  useRef, 
  useState,
  useEffect } from "react"
import { trpc } from "./trpc"
import { 
  addErrors, 
  inputHasError, 
  removeErrors } from "./utils"


export const useExpansion = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false)

  const handleExpansion = () =>{
    setIsExpanded(prev => !prev)
  }

  return {
    isExpanded,
    handleExpansion
  }
}

interface AnyFocusableELement extends HTMLElement{}

export const useFocusRef = () =>{
  const elementRef = useRef<AnyFocusableELement | null>(null)

  useEffect(() =>{ 
    if ( elementRef.current ) {
      elementRef.current.focus()
    }
  }, [])

  return {
    elementRef
  }
}

export type FormFields = HTMLInputElement | HTMLTextAreaElement
export type AddFieldRef = ( element: FormFields | null ) => void
type HandleFormSubmit = ( event: React.FormEvent ) => void 

export const useFormValidation = () => {
  const [ isValidData, setIsValidData ] = useState(false)
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const formFieldsRefs = useRef<FormFields[]>([])
  const ariaLive = useRef<HTMLParagraphElement | null>(null)

  // Add an element as a referenced element
  const addFieldRef: AddFieldRef = ( element ) => {
    if ( element && !formFieldsRefs.current.includes(element) ) {
      formFieldsRefs.current.push(element)
    }
  }

  // Returns an array of referenced form fields
  const getFieldsRef = () => {
    return formFieldsRefs.current
  }

  const configureLiveRegion = ( hasError: boolean ) => {
    if ( !ariaLive.current ){
      return
    }

    if ( hasError ) {
      const invalidFields = getFieldsRef().filter(field => field.getAttribute("aria-invalid")==="true")
      const invalidFieldsNames = invalidFields.map(field => field.name)

      ariaLive.current.textContent = "Form submission invalid. Please check your " + invalidFieldsNames.join(" , ") + " input fields"
    
      return
    } 
    ariaLive.current.textContent = ""
  }

  const handleFormSubmit: HandleFormSubmit = ( event ) => {
    event.preventDefault()
    let formHasError = false
    setIsSubmitting(true)

    formFieldsRefs.current.forEach(field => {
      if ( inputHasError(field) ) {
        formHasError = true
        addErrors(field)
      } else {
        removeErrors(field)
        formHasError = false
      }
    })

    if ( formHasError ) {
      configureLiveRegion(true)
      resetFormValidation()
    } else {
      setIsValidData(true)
    }
  }

  const resetFormValidation = () => {
    setIsSubmitting(false)
    setIsValidData(false)
  }

  return {
    isValidData,
    isSubmitting,
    ariaLive,
    addFieldRef,
    getFieldsRef,
    handleFormSubmit,
    resetFormValidation
  }
}

type SignupData = UserSchema & {
  [ key: string ]: string
}

export const useSignup = () => {
  const {
    isValidData,
    addFieldRef,
    handleFormSubmit,
    getFieldsRef
  } = useFormValidation()
  const mutation = trpc.useMutation(["user.signup"])
  const signupDataRef = useRef<SignupData | null>(null)

  useEffect(() =>{
    if ( isValidData ) {
      const fieldDatas = getFieldsRef().reduce((accu, curr) => {
        accu[curr.name] = curr.value

        return accu
      }, {} as SignupData)

      signupDataRef.current = fieldDatas
      mutation.mutate(fieldDatas)
    }
  }, [ isValidData ])

  useEffect(() =>{
    if ( mutation.isSuccess && signupDataRef.current ) {
      signIn("credentials", {
        ...signupDataRef.current,
        callbackUrl: "/"
      })
    }
  }, [ mutation ])

  return {
    addFieldRef,
    handleFormSubmit
  }
}
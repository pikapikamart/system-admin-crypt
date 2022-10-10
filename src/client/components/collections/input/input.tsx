import { AddFieldRef } from "@/lib/hooks";
import { 
  InputContainer,
  InputLabel,
  InputWrapper,
  InputError } from "./input.styled";


type InputProps = {
  labelText: string,
  name: string,
  addFieldRef: AddFieldRef,
  type: string,
  defaultValue?: string
}

const Input = ( { labelText, name, addFieldRef, type , defaultValue}: InputProps ) =>{

  return (
    <InputContainer>
      <InputLabel htmlFor={ name }>{ labelText }</InputLabel>
      <InputWrapper
        as="input"
        id={ name }
        name={ name }
        type={ type }
        defaultValue={ defaultValue ?? "" }
        ref={ addFieldRef }
        aria-required="true" />
      <InputError>Enter a valid { name } value</InputError>
    </InputContainer>
  )
}


export default Input
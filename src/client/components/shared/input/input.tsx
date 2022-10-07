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
  type: string
}

const Input = ( { labelText, name, addFieldRef, type }: InputProps ) =>{

  return (
    <InputContainer>
      <InputLabel htmlFor={ name }>{ labelText }</InputLabel>
      <InputWrapper
        as="input"
        id={ name }
        name={ name }
        type={ type }
        ref={ addFieldRef }
        aria-required="true" />
      <InputError>Enter a valid { name } value</InputError>
    </InputContainer>
  )
}


export default Input;
import styled from "styled-components";
import { rem } from "@/styled/functions";
import { FormWrapper } from "../form.styled";
import { InputContainer, InputWrapper } from "../../input/input.styled";


export const EditFormWrapper = styled(FormWrapper)`
  align-items: flex-start;

  ${ InputContainer } {

    &:not(:last-of-type ) {
      margin-bottom: ${ rem(24) };
    }
  }
`

export const EditTextarea = styled(InputWrapper)`
  height: ${ rem(96) };
  max-width: ${ rem(430) };
  padding: ${ rem(12) };
  resize: none;
  width: 100vw;
`
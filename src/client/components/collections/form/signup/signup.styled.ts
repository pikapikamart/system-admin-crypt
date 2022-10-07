import styled, { css } from "styled-components"
import { rem } from "@/styled/functions"
import { InputContainer } from "@/components/collections/input/input.styled"
import { FormWrapper } from "../form.styled"


export const SignupFormWrapper = styled(FormWrapper)`

  ${ InputContainer } {

    &:not(:last-of-type) {
      margin-bottom: ${ rem(24) }
    }
  }
`
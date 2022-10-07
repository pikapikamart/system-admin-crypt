import { rem } from "@/styled/functions"
import styled from "styled-components"
import { InputContainer } from "../../input/input.styled"
import { FormWrapper } from "../form.styled"


export const LoginFormWrapper = styled(FormWrapper)`

  ${ InputContainer } {

    &:not(:last-of-type) {
      margin-bottom: ${ rem(24) }
  }
}
`
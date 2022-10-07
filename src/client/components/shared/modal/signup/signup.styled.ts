import styled, { css } from "styled-components"
import { rem } from "@/styled/functions"
import { ColumCenterCenter } from "@/styled/shared/helpers"
import { InputContainer } from "../../input/input.styled"


export const SignupForm = styled(ColumCenterCenter)`

  ${ InputContainer } {
    
    &:not(:last-of-type) {
      margin-bottom: ${ rem(24) };
    }
  }
`

type SignupOptionProps = {
  colored: boolean
}

export const SignupOption = styled.button<SignupOptionProps>`
  border-radius: ${ rem(24) };
  font-weight: 500;
  padding: ${ rem(12) } ${ rem(16) };
  text-align: center;
  width: ${ rem(288) };

  ${ ({ colored, theme: { colors } }) => {
    switch(colored) {
      case false: 
        return css`
          background-color: ${ colors.white2 };
          color: ${ colors.dark2 };
          border: 1px solid ${ colors.white4 }
        `
      case true:
        return css`
          background-color: ${ colors.darkBlue };
          color: ${ colors.white1 };
        `
    }
  } }
`

export const SignupOptions = styled.div`
  margin-top: ${ rem(32) };

  ${ SignupOption } {
    display: block;

    &:first-of-type{
      margin-bottom: ${ rem(8) };
    }
  }
`
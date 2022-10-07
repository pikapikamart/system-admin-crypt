import { rem } from "@/styled/functions"
import { ColumCenterCenter } from "@/styled/shared/helpers"
import styled, { css } from "styled-components"


export const FormWrapper = styled(ColumCenterCenter)``

type FormOptionProps = {
  colored?: "red" | "blue" | "darkBlue"
}

export const FormOption = styled.button<FormOptionProps>`
  border-radius: ${ rem(24) };
  font-weight: 500;
  padding: ${ rem(12) } ${ rem(16) };
  text-align: center;
  width: ${ rem(288) };

  ${ ({ colored, theme: { colors } }) => {
    switch(colored) {
      case "red": 
        return css`
          background-color: ${ colors.red };
          color: ${ colors.white1 };
        `
      case "blue":
        return css`
          background-color: ${ colors.blue };
          color: ${ colors.white1 };
        `
      case "darkBlue":
        return css`
          background-color: ${ colors.darkBlue };
          color: ${ colors.white1 };
        `
      default:
        return css`
          background-color: ${ colors.white2 };
          color: ${ colors.dark2 };
          border: 1px solid ${ colors.white4 }
        `
    }
  } }
`

export const FormOptions = styled.div`
  margin-top: ${ rem(32) };

  ${ FormOption } {
    display: block;

    &:first-of-type{
      margin-bottom: ${ rem(8) };
    }
  }
`
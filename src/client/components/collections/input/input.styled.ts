import styled from "styled-components"
import { rem } from "@/styled/functions"
import { 
  ColumCenterCenter, 
  RowCenter } from "@/styled/shared/helpers"


export const InputContainer = styled(ColumCenterCenter)`
  align-items: flex-start;
  max-width: ${ rem(288) };
  position: relative;
  width: 100vw;
`

export const InputLabel = styled.label`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(15) };
  margin-bottom: ${ rem(2) };
`

export const InputError = styled.span`
  color: ${ ({ theme }) => theme.colors.red };
  font-size: ${ rem(12) };
  inset: calc(100% + ${ rem(4) }) auto auto ${ rem(12) };
  opacity: 0;
  position: absolute;
  transition: opacity .5s ease, visibility .5s ease; 
  visibility: hidden;
`

export const InputWrapper = styled(RowCenter)`
  border-radius: ${ rem(4) };
  height: ${ rem(40) };
  padding: 0 ${ rem(12) };
  width: 100%;

  ${ ({ theme: { colors } }) => `
    color: ${ colors.dark2 };
    border: 1px solid ${ colors.grey2 };

    &[aria-invalid="true"] {
      border-color: ${ colors.red };

      + ${ InputError } {
        opacity: 1;
        visibility: visible;
      }
    }
  ` }
`
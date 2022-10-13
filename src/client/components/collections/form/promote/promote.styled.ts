import styled from "styled-components"
import { rem } from "@/styled/functions"
import { InputContainer, InputWrapper } from "@/components/collections/input/input.styled"
import { FormWrapper, FormOptions } from "../form.styled"


export const PromoteFormWrapper = styled(FormWrapper)`
  align-items: flex-start;

  ${ InputContainer } {

    &:not(:last-of-type) {
      margin-bottom: ${ rem(24) }
    }
  }

  fieldset {
    flex-direction: row;
    justify-content: flex-start;
  }

  ${ FormOptions } {
    display: flex;

    max-width: 100%;

    > button {

      &:first-of-type {
        margin-bottom: 0;
        margin-right: ${ rem(8) };
      }
    }
  }
`

export const ImageInputContainer = styled.div`
  margin-bottom: ${ rem(24) };

  ${ InputWrapper } {
    padding-top: ${ rem(6) };
  }
`

export const NftImage = styled.img`
  border-radius:  50%;
  display: block;
`

export const NftDescription = styled(InputWrapper)`
  height: ${ rem(96) };
  max-width: 100%;
  resize: none;
  width: 100%;
`

export const PromoteInputsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  max-width: 100%;
  
  &:first-of-type {
    margin-bottom: ${ rem(24) };
  }

  ${ InputContainer } {
    font-size: ${ rem(15) };
    max-width: 50%;

    &:first-of-type {
      margin-right: ${ rem(12) };
    }
  }
`

export const PromoteLiveRadioContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;

  > input {
    margin-right: ${ rem(4) };
  }
`

export const PromoteLiveRadio = styled(InputWrapper)`
  font-size: ${ rem(24) };
  height: ${ rem(24) };
  width: ${ rem(24) };
`
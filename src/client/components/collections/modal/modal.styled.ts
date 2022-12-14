import styled from "styled-components"
import { rem } from "@/styled/functions"


export const BaseModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, .8);
  font-family: 'Raleway', sans-serif;
  inset: 0;
  outline: none;
  overflow-y: scroll;
  position: fixed;
  z-index: 100;
`

export const ModalExit = styled.div`
  inset: 0;
  position: absolute;
`

export const ChildModal = styled.div`
  border-radius: ${ rem(8) };
  background-color: ${ ({ theme }) => theme.colors.white1 };
  max-width: ${ rem(528) };
  margin: ${ rem(80) } auto;
  padding: ${ rem(64) } ${ rem(48) } ${ rem(56) };
  position: relative;
  width: 100%;
  z-index: 10;
`

type ModalHeadingProps = {
  align: "left" | "center" | "right"
}

export const ModalHeading = styled.h3<ModalHeadingProps>`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(28) };
  margin-bottom: ${ rem(32) };
  text-align: ${ ({ align }) => align };
`
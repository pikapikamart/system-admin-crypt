import styled from "styled-components"
import { rem } from "@/styled/functions"


export const NftsWrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  margin-top: ${ rem(40) };
`

export const NftsPromoteButton = styled.button`
  background-color: #4C8394;
  color: white;
  border-radius: ${ rem(8) };
  font-weight: 500;
  inset: 0 0 auto auto;
  padding: ${ rem(12) } ${ rem(24) };
  position: absolute;
`

export const NftsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${ rem(32) };
`

export const NftItem = styled.li`
  align-items: center;
  border-radius: ${ rem(8) };
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .15);
  display: flex;
  height: ${ rem(136) };
  padding: ${ rem(16) };
`

export const NftImage = styled.img`
  border-radius: ${ rem(8) };
  height: ${ rem(104) };
`

export const NftContentContainer = styled.div`
  flex-basis: calc(100% - ${ rem(104) });
  margin-left: ${ rem(16) };
`

export const NftName = styled.p`
  color: #000000;
  font-size: ${ rem(19) };
  font-weight: 700;
`

export const NftLive = styled.p`
  color: #000000;
  font-size: ${ rem(16) };
  font-weight: 700;
  max-width: max-content;
  position: relative;

  &::before {
    content: "";
    background: url("/icons/live.svg") no-repeat center center;
    height: ${ rem(10) };
    inset: 50% -${ rem(18) } auto auto;
    position: absolute;
    transform: translate(0, -50%);
    width: ${ rem(10) };
  }
` 

export const NftOwner = styled.p`
  font-size: ${ rem(16) };
  font-weight: 700; 

  > span {
    font-size: ${ rem(13) };
  }
`

export const NftLinks = styled.ul`
  display: flex;
  margin: ${ rem(4) } 0 0 auto;
  max-width: max-content;
`

export const NftLink = styled.li`

  &:not(:last-of-type) {
    margin-right: ${ rem(16) };
  }
`
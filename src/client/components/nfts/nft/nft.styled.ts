import styled from "styled-components"
import { rem } from "@/styled/functions"


export const MainWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding: ${ rem(56) } 0 0 0;
`

export const ContentContainer = styled.div`
  margin: auto;
  max-width: ${ rem(608) };
`

export const NftWrapper = styled.div`
  text-align: center;
`

export const NftImage = styled.img`
  border-radius: 50%;
  height: ${ rem(224) };
  margin: 0 auto ${ rem(16) };
  width: ${ rem(224) };
`

export const NftName = styled.h1`
  font-size: ${ rem(28) };
  margin-bottom: ${ rem(16) };
`

export const NftLive = styled.p`
  font-weight: 700;
  margin:0 auto ${ rem(24) };
  max-width: max-content;
  position: relative;

  &::after {
    content: "";
    background: url("/icons/live.svg") no-repeat center center;
    height: ${ rem(10) };
    inset: 50% -${ rem(18) } auto auto;
    position: absolute;
    transform: translate(0, -50%);
    width: ${ rem(10) };
  }
`

export const NftDescription = styled.p`
  font-size: ${ rem(18) };
  line-height: 1.5;
  margin-bottom: ${ rem(32) };
  white-space: pre-wrap;
`

export const NftLinks = styled.ul`
  display: flex;
  margin: auto;
  max-width: max-content;
`

export const NftLinkItem = styled.li`

  &:not(:last-of-type) {
    margin-right: ${ rem(16) };
  }
`
import styled from "styled-components"
import { rem } from "@/styled/functions"


export const PostWrapper = styled.main`
  font-family: "Raleway", sans-serif;
  padding: ${ rem(56) } 0 ${ rem(128) };
`

export const ContentContainer = styled.div`
  max-width: ${ rem(624) };
  margin: auto;
`

export const PostContentContainer = styled.div`
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.white4 };
  padding-bottom: ${ rem(32) };
`

export const PostOwnerName = styled.p`
  color: ${ ({ theme }) => theme.colors.darkBlue };
  font-size: ${ rem(20) };
  font-weight: 700;

  > span {
    color: ${ ({ theme }) => theme.colors.grey1 };
    font-size: ${ rem(16) };
    font-weight: ${ rem(500) };
    margin-left: ${ rem(8) };
  }
`

export const PostContent = styled.p`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(18) };
  font-weight: 500;
  margin: ${ rem(12) } 0;
  white-space: pre-wrap;
`

export const PostTagsList = styled.ul`
  display: flex;
  margin-bottom: ${ rem(20) };
  
`

export const PostTagItem = styled.li`
  border-radius: ${  rem(16) };
  font-size: ${ rem(13) };
  font-weight: 600;
  padding: ${ rem(4) } ${ rem(12) };
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-right: ${ rem(4) };
  }
  
  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.darkBlue };
    color: ${ colors.white1 };
  ` }
`

export const PostDate = styled.p`
  color: ${ ({ theme }) => theme.colors.grey2 };
  font-weight: 500;
`
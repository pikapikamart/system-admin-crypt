import styled from "styled-components"
import { rem } from "@/styled/functions"


export const UserWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding: ${ rem(56) } ${ rem(128) };
`

export const ContentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  max-width: max-content;
  margin: 0 auto;
`

export const UserContentContainer = styled.div`
  max-width: ${ rem(624) };
  width: 100vw;
`

export const UserHeader = styled.div`
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.white4 };
  margin-bottom: ${ rem(40) };
  padding-bottom: ${ rem(16) };
  position: relative;
`

export const UserName = styled.h1`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(20) };
  margin-bottom: ${ rem(2) };
`

export const UserEmail = styled.p`
  color: ${ ({ theme }) => theme.colors.grey1 };
  font-weight: 500;
  margin-bottom: ${ rem(24) }
`

export const UserBio = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
`

export const UserEditProfile = styled.button`
  border-radius: ${ rem(8) };
  font-weight: 600;
  font-size: ${ rem(17) };
  inset: 0 0 auto auto;
  padding: ${ rem(10) } ${ rem(18) };
  position: absolute;

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.blue };
    color: ${ colors.white1 };
  ` }
`

export const UserPostHeading = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(20) };
  margin-bottom: ${ rem(16) };
`

export const UserPostList = styled.ul``

export const UserWatchlistContainer = styled.div`
  border-radius: ${ rem(8) };
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15);
  margin-left: ${ rem(40) };
  max-width: ${ rem(256) };
  padding: ${ rem(32) } ${ rem(24) };
  width: 100vw;
`

export const UserWatchlistHeader = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(20) };
  margin-bottom: ${ rem(24) };
`

export const UserWatchlist = styled.ul`

`

export const UserWatchlistItem = styled.li`

  &:not(:last-of-type) {
    margin-bottom: ${ rem(8) };
  }
  
  > a {
    align-items: center;
    display: flex;
  }

  img {
    border-radius: 50%;
    height: ${ rem(32) };
    margin-right: ${ rem(8) };
    width: ${ rem(32) };
  }

  p {
    align-items: flex-start;
    color: ${ ({ theme }) => theme.colors.dark1 };
    display: flex;
    font-size: ${ rem(22) };
    font-weight: 700;

    > span {
      font-weight: 400;
      font-size: ${ rem(16) };
      margin-left: ${ rem(8) };
      text-transform: uppercase;
    }
  }
`
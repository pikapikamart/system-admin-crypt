import styled, { css } from "styled-components"
import { rem } from "@/styled/functions"
import { 
  RowCenter, 
  RowCenterBetween } from "@/styled/shared/helpers"


export const HeaderWrapper = styled(RowCenterBetween)`
  font-family: 'Raleway', sans-serif;
  min-height: ${ rem(70) };
  padding: 0 ${ rem(64) };

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.white1 };
    border-bottom: 1px solid ${ colors.white4 };
  ` }
`

export const HeaderNavbar = styled.nav`
  font-weight: 600;
`

export const HeaderNavlinks = styled(RowCenter)`

`

export const NavlinksItem = styled.li`
  
  &:not(:last-of-type) {
    margin-right: ${ rem(16) };
  }
`

export const Navlink = styled.a`

  ${({ theme: { colors } }) => `
    color: ${ colors.grey2};

    &[aria-current="page"] {
      color: ${ colors.darkBlue };
      position: relative;

      &::after {
        content: "";
        background-color: ${ colors.darkBlue };
        height: ${ rem(3) };
        inset: auto auto -${ rem(12) } 50%;
        position: absolute;
        transform: translate(-50%, 0);
        width: ${ rem(56) };
      }
    }
  `}
`

export const HeaderOptions = styled(RowCenter)`

`

export const HeaderOptionsItem = styled.li`
  
  &:first-of-type {
    margin-right: ${ rem(8) };
  }
`

type HeaderOptionProps = {
  colored: boolean
}

export const HeaderOption = styled.button<HeaderOptionProps>`
  border-radius: ${ rem(8) };
  font-weight: 500;
  padding: ${ rem(8) } ${ rem(16) };

  ${ ({ colored, theme: { colors } }) => {
    switch(colored) {
      case false: 
        return css`
          background-color: ${ colors.white1 };
          color: ${ colors.greyBlue };
          border: 1px solid ${ colors.greyBlue }
        `
      case true:
        return css`
          background-color: ${ colors.darkBlue };
          color: ${ colors.white1 };
        `
    }
  } }
`
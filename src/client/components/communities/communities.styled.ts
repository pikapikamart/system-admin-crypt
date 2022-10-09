import styled from "styled-components";
import { rem } from "@/styled/functions";
import { ColumCenterCenter, RowCenter } from "@/styled/shared/helpers";


export const MainWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding: ${ rem(56) } 0 ${ rem(128) };
`

export const ContentContainer = styled.div`
  max-width: ${ rem(624) };
  margin: auto;
`

export const FeedsWrapper = styled.div`
  margin-top: ${ rem(48) };
`

export const MainHeading = styled.h1`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(26) };
`

export const FeedsList = styled.ul`
  margin-top: ${ rem(16) };
`

export const FeedsListItem = styled.li`
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.white4 };
  padding: ${ rem(24) };
  position: relative;
  transition: background-color .45s ease;

  &:hover,
  &:focus-within {
    background-color: ${ ({ theme }) => theme.colors.whiteBlue1 };
    cursor: pointer;
  }
`

export const FeedsItemLink = styled.a`
  inset: 0;
  outline: none;
  position: absolute;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`

export const FeedsItemHeader = styled(RowCenter)`
  align-items: flex-end;
`

export const FeedsItemUser = styled.p`
  font-size: ${ rem(17) };
  font-weight: 700;

  ${ ({ theme: { colors } }) => `
    color: ${ colors.dark1 };

    > span {
      color: ${ colors.grey1 };
      font-size: ${ rem(15) };
      font-weight: 500;
      margin-left: ${ rem(8) };
    }
  ` }
`

export const FeedsItemDate = styled.p`
  font-size: ${ rem(15) };
  font-weight: 500;
  margin-left: ${ rem(24) };
  position: relative;

  ${ ({ theme: { colors } }) => `
    color: ${ colors.grey1 };
    
    &::before {
      content: "";
      background-color: ${ colors.grey1 };
      border-radius: 50%;
      height: ${ rem(4) };
      inset: 50% auto auto -${ rem(10) };
      position: absolute;
      transform: translate(0, -50%);
      width: ${ rem(4) };
    }
  ` }
`

export const FeedsItemContent = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
  line-height: 1.5;
  font-size: ${ rem(15) };
  font-weight: 500;
  margin: ${ rem(12) } 0;
  white-space: pre-wrap;
`

export const FeedsItemTagsList = styled(RowCenter)`
  margin-bottom: ${ rem(20) };
`

export const FeedsItemTag = styled.li`
  border-radius: ${ rem(16) };
  font-weight: 600;
  font-size: ${ rem(13) };
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

export const FeedsItemComments = styled.div`
  background: url("/icons/comments.svg") no-repeat left center;
  display: flex;
  height: ${ rem(20) };
  max-width: max-content;
  position: relative;
  z-index: 20;

  > p {
    color: ${ ({ theme }) => theme.colors.darkBlue };
    font-weight: 500;
    margin-left: ${ rem(24) };
  }
`

export const FeedsItemOptions = styled.button`
  background: url("/icons/option.svg") no-repeat center center;
  border-radius: ${ rem(8) };
  border: 1px solid transparent;
  height: ${ rem(28) };
  margin-left: ${ rem(16) };
  transition: border-color .3s ease;
  width: ${ rem(32) };

  &:hover {
    border-color: ${ ({ theme }) => theme.colors.greyBlue };
  }

  &[aria-expanded="true"] + ul {
    opacity: 1;
    visibility: visible;
  }
`

export const FeedsItemDropdown = styled(ColumCenterCenter)`
  align-items: flex-start;
  border-radius: ${ rem(4) };
  height: ${ rem(70) };
  inset: 50% 0 auto auto;
  list-style: none;
  opacity: 0;
  padding: 0 ${ rem(16) };
  position: absolute;
  transform: translate(120%, -50%);
  transition: opacity .3s ease, visibility .3s ease;
  visibility: hidden;
  width: ${ rem(126) };

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.white1 };
    border: 1px solid ${ colors.grey3 };

    &::before {
      content: "";
      background: url("/icons/arrow.svg") no-repeat center center;
      height: ${ rem(18) };
      inset: 50% auto auto 0;
      position: absolute;
      transform: translate(-80%, -50%);
      width: ${ rem(22) };
    }

    &::after {
      content: "";
      background-color: ${ colors.white1 };
      height: ${ rem(24) };
      inset: 50% auto auto 0;
      position: absolute;
      transform: translate(0, -50%);
      width: ${ rem(4) };
    }
  ` }
`

export const FeedsDropdownItem = styled.li`
  
  ${ ({ theme: { colors }}) => `
    color: ${ colors.dark2 };

    &:first-of-type {
      margin-bottom: ${ rem(4) };
    }

    &:last-of-type {
      color: ${ colors.red };
    }
  ` }
`
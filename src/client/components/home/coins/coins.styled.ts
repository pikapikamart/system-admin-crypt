import styled from "styled-components"
import { rem } from "@/styled/functions"
import { RowCenter } from "@/styled/shared/helpers"


export const TableWrapper = styled.table`
  border-collapse: collapse;
  font-family: 'Roboto', sans-serif;
  margin-top: ${ rem(12) };
  width: 100%;
`

export const TableHead = styled.thead`
  height: ${ rem(60) };
  position: sticky;
  top: 0;

  th {
    font-size: ${ rem(14) };
    font-weight: 600;
    text-align: right;

    &:first-of-type {
      width: ${ rem(32) }
    }

    &:last-of-type {
      width: ${ rem(32) }
    }

    &:nth-of-type(2) {
      text-align: left;
      width: ${ rem(56) };
    }

    &:nth-of-type(3) {
      text-align: left;
    }

    &:nth-of-type(4) {
      background-color: #F8F8F8;
      padding-right: ${ rem(8) };
    }
  }

  ${ ({ theme: { colors } }) => `
    background-color ${ colors.white1 };
    border-top: 1px solid ${ colors.white3 };
  ` }
`

export const TableBody = styled.tbody`

  tr {
    transition: transform .5s ease;

    &:not(:last-of-type) {
      border-top: 1px solid ${ ({ theme }) => theme.colors.white3 };
    }

    &:hover {
      background-color: #F8F8F8;
      cursor: pointer;
      transform: translateX(${ rem(8) });
    }
  }

  td {
    font-size: ${ rem(14) };
    font-weight: 600;
    text-align: right;

    &:first-of-type {
      width: ${ rem(32) }
    }

    &:last-of-type {
      width: ${ rem(32) }
    }

    &:nth-of-type(2) {
      text-align: left;
      width: ${ rem(56) };
    }

    &:nth-of-type(4) {
      background-color: #F8F8F8;
      padding-right: ${ rem(8) };
    }
  }
`

export const TableRow = styled.tr`
  font-size: ${ rem(15) };
  height: ${ rem(60) };
`

export const CoinRank = styled.td`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(14) };
`

export const CoinProfile = styled(RowCenter)`
  height: 100%;
`

export const CoinImage = styled.img`
  border-radius: 50%;
  height: ${ rem(28) };
  margin-right: ${ rem(8) };
  width: ${ rem(28) };
`

export const CoinName = styled.p`
  color: ${ ({ theme }) => theme.colors.dark2 };
  display: flex;
  font-weight: 700;
  font-size: ${ rem(15) };

  span {
    font-size: ${ rem(9) };
    margin-left: ${ rem(8) };
    text-transform: uppercase;
  }
`

export const CoinPrice = styled.td`

`

type CoinPercentageProps = {
  negative: boolean
}

export const CoinPercentage = styled.td<CoinPercentageProps>`
  color: ${ ({ negative, theme: { colors } }) => negative? colors.red : colors.green };
`
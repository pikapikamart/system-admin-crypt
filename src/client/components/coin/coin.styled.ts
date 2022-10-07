import styled from "styled-components";
import { rem } from "@/styled/functions";
import { 
  RowCenter, 
  RowCenterBetween } from "@/styled/shared/helpers";
import { FormOption } from "../collections/form/form.styled";


export const MainWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding: ${ rem(56) } 0 ${ rem(128) };
`

export const ContentContainer = styled.div`
  max-width: ${ rem(800) };
  margin: 0 auto;
`

export const CoinWrapper = styled.div`
  display: grid;
  font-family: 'Roboto', sans-serif;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: ${ rem(40) } ${ rem(32) };
  margin-top: ${ rem(64) };
  width: 100%;
`

export const CoinHeader = styled.div``

export const CoinRank = styled.p`
  border-radius: ${ rem(4) };
  font-size: ${ rem(14) };
  font-weight: 500;
  max-width: max-content;
  padding: ${ rem(4) } ${ rem(6) };

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.darkBlue };
    color: ${ colors.white1 };
  ` }
`

export const CoinProfile = styled(RowCenter)`
  margin: ${ rem(16) } 0 ${ rem(8) };
`

export const CoinImage = styled.img`
  height: ${ rem(32) };
  margin-right: ${ rem(12) };
  width: ${ rem(32) };
`

export const CoinName = styled(RowCenter)`
  align-items: flex-start;
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(22) };

  > span {
    font-size: ${ rem(15) };
    font-weight: 400;
    margin-left: ${ rem(8) };
    text-transform: uppercase;
  }
`

type CoinPriceProps = {
  negative: boolean
}

export const CoinPrice = styled(RowCenter)<CoinPriceProps>`
  font-size: ${ rem(26) };
  font-weight: 900;

  > span {
    color: ${ ({ negative, theme }) => negative? theme.colors.red : theme.colors.green };
    font-weight: 500;
    font-size: ${ rem(16) };
    margin-left: ${ rem(24) };
  }
`

export const CoinWatchlistButton = styled(FormOption)`
  align-self: center;
  justify-self: end;
  max-width: max-content;
  padding: ${ rem(12) } ${ rem(32) };
`

export const CoinTopic = styled.h3`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(16) };
`

export const CoinMarketDataWrapper = styled.div`
  grid-column: 1 / 3;
`

export const CoinMarketDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: ${ rem(16) } ${ rem(32) };
  margin-top: ${ rem(24) };
  width: 100%;
`

export const CoinMarketListItem = styled(RowCenterBetween)`
  padding-bottom: ${ rem(16) };  

  ${ ({ theme: { colors } }) => `
    border-bottom: 1px solid ${ colors.white3 };
    color: ${ colors.grey1 };

    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      grid-column: 2 / 3;
    }

    &:nth-of-type(1),
    &:nth-of-type(4) {
      grid-row: 1 / 2;
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      grid-row: 2 / 3;
    }

    &:nth-of-type(3),
    &:nth-of-type(6) {
      grid-row: 3 / 4;
    }

    > p {
      color: ${ colors.dark1 };
      font-weight: 600;
    }
  ` }
`

export const CoinDescriptionWrapper = styled.div`
  grid-column: 1 / 3;
`

export const CoinDescription = styled.p`
  font-size: ${ rem(15) };
  line-height: 2;
  margin-top: ${ rem(32) };
`
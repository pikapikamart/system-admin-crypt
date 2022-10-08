import { useCoinWatchlist, useSetupUser } from "@/lib/hooks"
import { useAppDispatch } from "@/lib/store.hooks"
import { Coin as CoinType } from "@/src/server/json/coin.json"
import { toggleWatchlist } from "@/store/slices/user.slice"
import { SrOnly } from "@/styled/shared/helpers"
import { useSession } from "next-auth/react"
import { BreadCrumbs } from "./breadcrumbs"
import { 
  ContentContainer, 
  MainWrapper,
  CoinWrapper,
  CoinHeader,
  CoinRank,
  CoinProfile,
  CoinImage,
  CoinName,
  CoinPrice,
  CoinWatchlistButton,
  CoinTopic,
  CoinMarketDataList,
  CoinMarketListItem,
  CoinMarketDataWrapper,
  CoinDescriptionWrapper,
  CoinDescription
   } from "./coin.styled"


type CoinProps = {
  coin: CoinType
}

const Coin = ({ coin }: CoinProps) => {
  const {
    coinWatchlist,
    handleCoinWatchlist
  } = useCoinWatchlist(coin)
  const { user } = useSetupUser()

  if ( !coin ) {
    return <></>
  }

  return (
    <MainWrapper>
      <ContentContainer>
        <SrOnly as="h1">{ coin.name }</SrOnly>
        <BreadCrumbs 
          coinName={ coin.name }
          coinId={ coin.id } />
        <CoinWrapper>
          <CoinHeader>
            <CoinRank>Rank #{ coin.market_cap_rank }</CoinRank>
            <CoinProfile>
              <CoinImage 
                src={ "/coins/" + coin.id + ".png" } 
                alt="" />
              <CoinName as="h2">
                { coin.name }
                <span>{ coin.symbol }</span>
              </CoinName>
            </CoinProfile>
            <CoinPrice 
              as="p"
              negative={ coin.price_change_24hr < 0 }>
              ${ `${ coin.current_price }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
              <span>{ Math.round(coin.price_change_24hr * 10)/10 }%</span>
            </CoinPrice>
          </CoinHeader>
          { user.userId && (
            <CoinWatchlistButton 
              colored="darkBlue"
              onClick={ handleCoinWatchlist }>
              { coinWatchlist?.find(token => token.id===coin.id)? "Remove from watchlist" : "Add to watchlist" }
            </CoinWatchlistButton>
          ) }
          <CoinMarketDataWrapper>
            <CoinTopic>Market Data</CoinTopic>
            <CoinMarketDataList>
              <CoinMarketListItem as="li">
                Market Cap
                <p>${ coin.market_cap }</p>
              </CoinMarketListItem>
              <CoinMarketListItem as="li">
                24hr Trading Volume
                <p>${ coin.total_volume }</p>
              </CoinMarketListItem>
              <CoinMarketListItem as="li">
                Fully Diluted Valuation
                <p>{ coin.fully_diluted_valuation? `$${ coin.fully_diluted_valuation }` : "N/A" }</p>
              </CoinMarketListItem>
              <CoinMarketListItem as="li">
                Circulating Supply
                <p>{ coin.circulating_supply?? "N/A" }</p>
              </CoinMarketListItem>
              <CoinMarketListItem as="li">
                Total Supply
                <p>{ coin.total_supply?? "N/A" }</p>
              </CoinMarketListItem>
              <CoinMarketListItem as="li">
                Max Supply
                <p>{ coin.max_supply?? "N/A" }</p>
              </CoinMarketListItem>
            </CoinMarketDataList>
          </CoinMarketDataWrapper>
          <CoinDescriptionWrapper>
            <CoinTopic>Coin Description</CoinTopic>
            <CoinDescription dangerouslySetInnerHTML={{__html: coin.description}}></CoinDescription>
          </CoinDescriptionWrapper>
        </CoinWrapper>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Coin
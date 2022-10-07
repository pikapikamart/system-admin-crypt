import { 
  GetStaticPaths, 
  GetStaticPropsContext, 
  InferGetStaticPropsType, 
  NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Coin, coins } from "../server/json/coin.json";


const CoinPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ( { coin } ) => {

  return (
    <main></main>
  )
}


export default CoinPage

type Params = {
  params: {
    coin: string
  }
}

export const getStaticPaths: GetStaticPaths = async() =>{
  const coinsIds = coins.reduce((accu, cur) =>{
    accu.push({
      params: {
        coin: cur.id
      }
    })

    return accu
  }, [] as Params[])

  return {
    paths: coinsIds,
    fallback: false
  }
}

type CoinParam = ParsedUrlQuery & {
  coin: string
}

export const getStaticProps = async( context: GetStaticPropsContext ) => {
  const { coin } = context.params as CoinParam
  const singleCoin = coins.find( coinItem => coinItem.id===coin )

  return {
    props: {
      coin: JSON.parse(JSON.stringify(coin)) as Coin
    }
  }
}
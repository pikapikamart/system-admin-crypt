import { coins } from "../json/coin.json"
import { CoinIdSchema } from "../schemas/coin.schema"
import { trpcError, trpcSuccess } from "./utils.controller"


export const getAllCoinsHandler = async() => {
  const filteredCoins = coins.map(coin => {
    const { description, ...coinRest } = coin

    return coinRest
  })

  return trpcSuccess(true, filteredCoins)
}

export const getCoinHandler = async( { id }: CoinIdSchema ) => {
  const foundCoin = coins.find(coin => coin.id===id)

  if ( !foundCoin ) {
    return trpcError("NOT_FOUND", "No coin found with this id")
  }

  return trpcSuccess(true, foundCoin)
}

export const getCoinsNamesHandler = async() =>{
  const filteredCoins = coins.map(coin => {
    const { id, name, symbol } = coin

    return { id, name, symbol }
  })

  return trpcSuccess(true, filteredCoins)
}
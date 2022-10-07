import { coins } from "../json/coin.json"
import { trpcSuccess } from "./utils.controller"


export const getAllCoinsHandler = async() => {
  const filteredCoins = coins.map(coin => {
    const { description, ...coinRest } = coin

    return coinRest
  })

  return trpcSuccess(true, filteredCoins)
}
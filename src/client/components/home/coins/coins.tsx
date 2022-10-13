import { trpc } from "@/lib/trpc";
import { BlockLink } from "@/styled/shared/helpers";
import Link from "next/link";
import { 
  TableWrapper,
  TableRow,
  CoinRank,
  CoinProfile,
  CoinImage,
  CoinName,
  CoinPrice, 
  CoinPercentage,
  TableHead,
  TableBody } from "./coins.styled";


const AllCoins = () =>{
  const query = trpc.useQuery(["coin.get-all"])

  const renderCoins = () =>{

    if ( !query.isSuccess ) {
      return <></>
    }

    const coins = query.data.data.map(coin => (
      <TableRow key={ coin.id }>
        <td></td>
        <CoinRank>{ coin.market_cap_rank }</CoinRank>
        <td>
          <Link
            href={ "/" + coin.id }
            passHref>
              <BlockLink>
                <CoinProfile>
                  <CoinImage src={ `/coins/${ coin.id }.png` } alt="" />
                  <CoinName>
                    { coin.name }
                    <span>{ coin.symbol }</span>
                  </CoinName>
                </CoinProfile>
              </BlockLink>
          </Link>
        </td>
        <CoinPrice>${ coin.current_price }</CoinPrice>
        <CoinPercentage negative={ coin.price_change_1hr < 0 } >{ Math.round(coin.price_change_1hr * 10)/10 }%
        </CoinPercentage>
        <CoinPercentage negative={ coin.price_change_24hr < 0 }>{ Math.round(coin.price_change_24hr * 10)/10 }%
        </CoinPercentage>
        <CoinPercentage negative={ coin.price_change_7d < 0 }>{ Math.round(coin.price_change_7d * 10)/10 }%
        </CoinPercentage>
        <td>${ `${ coin.total_volume }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
        <td>${ `${ coin.market_cap }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
        <td></td>
      </TableRow>
    ))

    return coins
  }

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
          <th></th>
        </tr>
      </TableHead>
      <TableBody>
        { renderCoins() }
      </TableBody>
    </TableWrapper>
  )
}


export default AllCoins;
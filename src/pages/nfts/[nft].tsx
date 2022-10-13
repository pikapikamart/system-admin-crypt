import { connectDatabase } from "@/src/server/database";
import { NFT } from "@/src/server/models/nft.model";
import { findMultipleNftService, findNftServicePopulator } from "@/src/server/services/nft.service";
import { 
  GetStaticPaths, 
  GetStaticPropsContext, 
  InferGetStaticPropsType, 
  NextPage } from "next";
import { ParsedUrlQuery } from "querystring";


const NFTPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ( { nft } ) => {
 
  if ( !nft ) {
    return <></>
  }

  return (
    // <Coin coin={ coin } />
    <></>
  )
}


export default NFTPage

type Params = {
  params: {
    nft: string
  }
}

export const getStaticPaths: GetStaticPaths = async() =>{
  await connectDatabase()
  const nfts = await findMultipleNftService(
    {},
    "-_id nftId",
  )
  const nftsIds = nfts.reduce((accu, cur) =>{
    accu.push({
      params: {
        nft: cur.nftId
      }
    })

    return accu
  }, [] as Params[])

  return {
    paths: nftsIds,
    fallback: false
  }
}

type NFTParam = ParsedUrlQuery & {
  coin: string
}

export const getStaticProps = async( context: GetStaticPropsContext ) => {
  await connectDatabase()
  const { nft } = context.params as NFTParam
  const singleNft = await findNftServicePopulator(
    { nftId: nft },
    "-_id ",
    {
      path: "owner",
      select: "-_id username"
    }
  )

  if ( !singleNft ) {
    return {
      redirect: {
        destination: "/communities",
        permanent: false
      }
    }
  }

  return {
    props: {
      nft: JSON.parse(JSON.stringify(singleNft)) as NFT
    }
  }
}
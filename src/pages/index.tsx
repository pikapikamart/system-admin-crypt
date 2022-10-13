import { Home } from "@/components/home";
import { InferGetServerSidePropsType, NextPage } from "next";
import { connectDatabase } from "../server/database";
import { NFT } from "../server/models/nft.model";
import { findMultipleNftServicePopulator } from "../server/services/nft.service";


const Homepage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ nfts }) =>{

  return (
    <Home nfts={ nfts } />
  )
}


export const getServerSideProps = async() =>{
  await connectDatabase()
  const nfts = await findMultipleNftServicePopulator(
    {},
    "-_id -description",
    {
      path: "owner",
      select: "username"
    }
  )

  return {
    props: {
      nfts: JSON.parse(JSON.stringify(nfts)) as NFT[]
    }
  }
}

export default Homepage;
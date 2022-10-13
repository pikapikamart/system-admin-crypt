import { NFT } from "@/src/server/models/nft.model"
import { TabbedInterface } from "../tablist"
import { Coins } from "./coins"
import { 
  ContentContainer, 
  MainHeading, 
  MainWrapper } from "./home.styled"
import { Nfts } from "./nfts"


type HomeProps = {
  nfts: NFT[]
}

const Home = ({ nfts }: HomeProps) => {

  return(
    <MainWrapper>
      <ContentContainer>
        <MainHeading>Today's Cryptocurrency</MainHeading>
        <TabbedInterface selectionNames={ ["Coins", "Nft's"] }>
          <Coins />
          <Nfts nfts={ nfts } />
        </TabbedInterface>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Home
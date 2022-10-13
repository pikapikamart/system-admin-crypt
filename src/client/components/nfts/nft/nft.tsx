import { NFT } from "@/src/server/models/nft.model"
import { 
  MainWrapper,
  ContentContainer,
  NftWrapper,
  NftImage,
  NftName,
  NftLive,
  NftDescription,
  NftLinks,
  NftLinkItem
 } from "./nft.styled"


type NftProps = {
  nft: NFT
}

const Nft = ({ nft }: NftProps) =>{

  return (
    <MainWrapper>
      <ContentContainer>
        <NftWrapper>
          <NftImage
            src={ nft.image }
            alt="" />
          <NftName>{ nft.name }</NftName>
          { nft.isLive && <NftLive>Minting is Live</NftLive> }
          <NftDescription>{ nft.description }</NftDescription>
          <NftLinks>
            <NftLinkItem>
              <a href={ nft.twitter }>
                <img
                  src="/icons/twitter.svg"
                  alt="" />
              </a>
            </NftLinkItem>
            { nft.binance && (
              <NftLinkItem>
                <a href={ nft.binance }>
                  <img
                    src="/icons/binance.svg"
                    alt="" />
                </a>
            </NftLinkItem>
            ) }
            { nft.website && (
              <NftLinkItem>
                <a href={ nft.website }>
                  <img
                    src="/icons/website.svg"
                    alt="" />
                </a>
            </NftLinkItem>
            ) }
          </NftLinks>
        </NftWrapper>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Nft
import { ParentModal } from "@/components/collections/modal"
import { PromoteNftModal } from "@/components/collections/modal/promote"
import { useExpansion } from "@/lib/hooks"
import { NFT } from "@/src/server/models/nft.model"
import { BlockLink } from "@/styled/shared/helpers"
import Link from "next/link"
import {
  NftsPromoteButton,
  NftsWrapper,
  NftsList,
  NftItem,
  NftImage,
  NftContentContainer,
  NftName,
  NftLive,
  NftOwner,
  NftLinks,
  NftLink
} from "./nfts.styled"


type NftsProps = {
  nfts: NFT[]
}

const Nfts = ({ nfts }: NftsProps) =>{
  const { isExpanded, handleExpansion } = useExpansion()

  if ( !nfts ) {
    return <></>
  }

  return (
    <>
      { isExpanded && (
        <ParentModal exit={ handleExpansion }>
          <PromoteNftModal exit={ handleExpansion } />
        </ParentModal>
      ) }
      <NftsWrapper>
        <NftsPromoteButton 
          onClick={ handleExpansion }
          aria-expanded={ isExpanded }>Promote Nft
        </NftsPromoteButton>
        <NftsList>
          { nfts.map(nft => (
            <NftItem key={ nft.nftId }>
              <Link
                href={`/nfts/${ nft.nftId }`}
                passHref>
                  <BlockLink>
                    <NftImage 
                      src={ nft.image }
                      alt="" />
                  </BlockLink>
              </Link>
              <NftContentContainer>
                <NftName>{ nft.name }</NftName>
                { nft.isLive && <NftLive>Live</NftLive> }
                <NftOwner>
                  <span>by: </span>
                  <Link
                    href={`/user/${ nft.owner.username }`}
                    passHref>
                    <a>
                      { nft.owner.username } 
                    </a>
                  </Link>
                </NftOwner>
                <NftLinks>
                  <NftLink>
                    <BlockLink href={ nft.twitter }>
                      <img
                        src="/icons/twitter.svg"  
                        alt=""/>
                    </BlockLink>
                  </NftLink>
                  { nft.binance && (
                    <NftLink>
                      <BlockLink href={ nft.binance }>
                        <img
                          src="/icons/binance.svg"
                          alt=""/>
                      </BlockLink>
                    </NftLink>
                  ) }
                  { nft.website && (
                    <NftLink>
                      <BlockLink href={ nft.website }>
                        <img
                          src="/icons/website.svg"
                          alt=""/>
                      </BlockLink>
                    </NftLink>
                  ) }
                </NftLinks>
              </NftContentContainer>
            </NftItem>
          )) }
        </NftsList>
      </NftsWrapper>
    </>
  )
}


export default Nfts
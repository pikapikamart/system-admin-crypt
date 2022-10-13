import { ParentModal } from "@/components/collections/modal"
import { PromoteNftModal } from "@/components/collections/modal/promote"
import { useExpansion } from "@/lib/hooks"
import { NFT } from "@/src/server/models/nft.model"
import {
  NftsPromoteButton,
  NftsWrapper
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
          aria-expanded={ isExpanded }>Promote Nft</NftsPromoteButton>
      </NftsWrapper>
    </>
  )
}


export default Nfts
import { 
  BreadCrumbsWrapper,
  BreadCrumbsList, } from "./breadcrumbs.styled"
import Link from "next/link"
import { BlockLink } from "@/styled/shared/helpers"


type BreadCrumbsProps = {
  coinName: string,
  coinId: string
}

const BreadCrumbs = ({ coinName, coinId }: BreadCrumbsProps) =>{

  return (
    <BreadCrumbsWrapper aria-label="breadcrumbs">
      <BreadCrumbsList as="ol">
        <li>
          <Link 
            href="/"
            passHref>
              <BlockLink>Coins</BlockLink>
          </Link>
        </li>
        <li>
          <Link 
            href={ "/" + coinId }
            passHref>
              <BlockLink aria-current="location">{ coinName }</BlockLink>
          </Link>
        </li>
      </BreadCrumbsList>
    </BreadCrumbsWrapper>
  )
}


export default BreadCrumbs
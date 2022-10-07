import { 
  BlockLink, 
  SrOnly } from "@/styled/shared/helpers";
import Link from "next/link";
import { 
  HeaderOption,
  HeaderOptions, 
  HeaderOptionsItem, 
  HeaderWrapper } from "./header.styled";
import { HeaderNavlinks } from "./navlinks";


const Header = () =>{

  return (
    <HeaderWrapper as="header">
      <div>
        <Link
          href="/"
          passHref>
            <BlockLink>
              <SrOnly>Homepage</SrOnly>
              <img 
                src="/logo/logo.svg"
                alt="Coinspot" />
            </BlockLink>
        </Link>
      </div>
      <HeaderNavlinks />
      <HeaderOptions as="ul">
        <HeaderOptionsItem>
          <HeaderOption colored={ false }>
            Log in
          </HeaderOption>
        </HeaderOptionsItem>
        <HeaderOptionsItem>
          <HeaderOption colored={ true }>
            Sign up
          </HeaderOption>
        </HeaderOptionsItem>
      </HeaderOptions>
    </HeaderWrapper>
  )
}


export default Header;
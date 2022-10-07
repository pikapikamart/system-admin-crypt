import { ParentModal } from "@/components/shared/modal";
import { SignupModal } from "@/components/shared/modal/signup";
import { 
  BlockLink, 
  SrOnly } from "@/styled/shared/helpers";
import Link from "next/link";
import { useState } from "react";
import { 
  HeaderOption,
  HeaderOptions, 
  HeaderOptionsItem, 
  HeaderWrapper } from "./header.styled";
import { HeaderNavlinks } from "./navlinks";


const Header = () =>{
  const [ loginExpanded, setLoginExpanded ] = useState(false)
  const [ signupExpanded, setSignupExpanded ] = useState(false)

  const removeModal = () => {
    setLoginExpanded(false)
    setSignupExpanded(false)
  }

  return (
    <>
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
            <HeaderOption 
              colored={ false }
              onClick={ () => setLoginExpanded(prev => !prev) }
              aria-expanded={ loginExpanded }>
                Log in
            </HeaderOption>
          </HeaderOptionsItem>
          <HeaderOptionsItem>
            <HeaderOption 
              colored={ true }
              onClick={ () => setSignupExpanded(prev => !prev) }
              aria-expanded={ signupExpanded }>
              Sign up
            </HeaderOption>
          </HeaderOptionsItem>
        </HeaderOptions>
      </HeaderWrapper>
      { (loginExpanded || signupExpanded) && (
        <ParentModal exit={ removeModal }>
          { signupExpanded && <SignupModal exit={ removeModal } /> }
        </ParentModal>
      ) }
    </>
  )
}


export default Header;
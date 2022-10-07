import { ParentModal } from "@/components/collections/modal";
import { LoginModal } from "@/components/collections/modal/login";
import { SignupModal } from "@/components/collections/modal/signup";
import { 
  BlockLink, 
  SrOnly } from "@/styled/shared/helpers";
import { 
  signOut, 
  useSession } from "next-auth/react";
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
  const { data } = useSession()

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
          { data && (
            <HeaderOptionsItem>
              <HeaderOption 
                colored={ false }
                onClick={ () => signOut({ callbackUrl: "/" }) }
                aria-expanded={ loginExpanded }>
                  Log out
              </HeaderOption>
            </HeaderOptionsItem>
          ) }
          { !data && (
            <>
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
            </>
          ) }
        </HeaderOptions>
      </HeaderWrapper>
      { (loginExpanded || signupExpanded) && (
        <ParentModal exit={ removeModal }>
          { signupExpanded && <SignupModal exit={ removeModal } /> }
          { loginExpanded && <LoginModal exit={ removeModal } /> }
        </ParentModal>
      ) }
    </>
  )
}


export default Header;
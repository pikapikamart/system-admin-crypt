import { GlobalStyle } from "@/styled/base";
import { HTMLHead } from "./head";
import { LayoutHeader } from "./header";


type LayoutProps = {
  children: React.ReactNode
}

const Layout = ( { children }: LayoutProps ) =>{

  return (
    <>
      <HTMLHead />
      <GlobalStyle />
      <LayoutHeader />
      { children }
    </>
  )
}


export default Layout;
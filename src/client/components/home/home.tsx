import { TabbedInterface } from "../tablist"
import { AllCoins } from "./coins/all"
import { 
  ContentContainer, 
  MainHeading, 
  MainWrapper } from "./home.styled"


const Home = () => {

  return(
    <MainWrapper>
      <ContentContainer>
        <MainHeading>Today's Cryptocurrency</MainHeading>
        <TabbedInterface selectionNames={ ["All"] }>
          <AllCoins />
        </TabbedInterface>
      </ContentContainer>
    </MainWrapper>
  )
}


export default Home
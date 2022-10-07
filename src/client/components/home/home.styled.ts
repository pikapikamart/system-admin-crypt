import styled from "styled-components";
import { rem } from "@/styled/functions";


export const MainWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding-top: ${ rem(56) }
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${ rem(1152) };
`

export const MainHeading = styled.h1`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(26) };
  margin-bottom: ${ rem(24) };
`
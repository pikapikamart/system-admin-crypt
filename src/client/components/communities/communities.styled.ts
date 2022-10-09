import styled from "styled-components";
import { rem } from "@/styled/functions";
import { ColumCenterCenter, RowCenter } from "@/styled/shared/helpers";


export const MainWrapper = styled.main`
  font-family: 'Raleway', sans-serif;
  padding: ${ rem(56) } 0 ${ rem(128) };
`

export const ContentContainer = styled.div`
  max-width: ${ rem(624) };
  margin: auto;
`

export const FeedsWrapper = styled.div`
  margin-top: ${ rem(48) };
`

export const MainHeading = styled.h1`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(26) };
`

export const FeedsList = styled.ul`
  margin-top: ${ rem(16) };
`
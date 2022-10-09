import styled from "styled-components"
import { rem } from "@/styled/functions"
import { 
  FeedsItemContent,
  FeedsItemDate,
  FeedsItemHeader,
  FeedsItemUser,
 } from "@/components/communities/communities.styled"


export const CommentsWrapper = styled.div`
  border-top: 1px solid ${ ({ theme }) => theme.colors.white4 };
  padding-top: ${ rem(32) };
`

export const CommentsHeading = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(20) };
`

export const CommentsList = styled.ul`
  margin-top: ${ rem(32) };
`

export const CommentsItem = styled.li`
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.white4 };
  padding: 0 ${ rem(24) } ${ rem(24) };

  &:not(:last-of-type) {
    margin-bottom: ${ rem(24) };
  }
`

export const CommentsItemHeader = styled(FeedsItemHeader)``

export const CommentsItemUser = styled(FeedsItemUser)`
`

export const CommentsItemDate = styled(FeedsItemDate)`
`

export const CommentsItemContent = styled(FeedsItemContent)`
  margin: ${ rem(8) } 0 0;
`
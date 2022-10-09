import styled from "styled-components"
import { rem } from "@/styled/functions"
import { 
  PostContent,
  PostDate,
  PostHeader, 
  PostUser } from "@/components/collections/post/post.styled"


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

export const CommentsItemHeader = styled(PostHeader)``

export const CommentsItemUser = styled(PostUser)`
`

export const CommentsItemDate = styled(PostDate)`
`

export const CommentsItemContent = styled(PostContent)`
  margin: ${ rem(8) } 0 0;
`
import styled from "styled-components"
import { rem } from "@/styled/functions"
import { 
  PostContentContainer,
  PostTextareaWrapper,
  PostTextarea,
  PostTagSubmit
   } from "@/components/collections/form/post/post.styled"


export const ReplyWrapper = styled(PostContentContainer)`
  grid-template-columns: 1fr;
  margin: ${ rem(40) } auto ${ rem(32) };
`

export const ReplyTextareaWrapper = styled(PostTextareaWrapper)`
`

export const ReplyTextarea = styled(PostTextarea)`
`

export const ReplyPostSubmit = styled(PostTagSubmit)`
  grid-column: 1 / 2;
  justify-self: start;
  max-width: max-content;
  padding: ${ rem(10) } ${ rem(18) };
`
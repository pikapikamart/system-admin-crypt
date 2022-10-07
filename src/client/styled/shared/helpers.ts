import styled, { css } from "styled-components";


export const SrOnly = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const CenterContent = styled.div`
  margin: 0 auto;
  max-width: max-content;
`

const BaseRowCenter = css`
  align-items: center;
  display: flex;
`

export const RowCenterBetween = styled.div`
  ${ BaseRowCenter };
  justify-content: space-between;
  width: 100%;
`

export const RowCenter = styled.div`
  ${ BaseRowCenter };
`

export const RowCenterCenter = styled.div`
  ${ BaseRowCenter };
  justify-content: center;
`

export const ColumCenterCenter = styled.div`
  ${ BaseRowCenter };
  flex-direction: column;
  justify-content: center;
`

export const BlockLink = styled.a`
  display: block;
`
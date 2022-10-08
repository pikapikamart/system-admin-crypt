import styled from "styled-components";
import { rem } from "@/styled/functions";
import { RowCenter } from "@/styled/shared/helpers";


export const PostWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr ${ rem(84) };
  gap: ${ rem(24) } ${ rem(16) };
  grid-template-rows: repeat(3, auto);
  max-width: ${ rem(576) };
`

export const CurrentUser = styled.p`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(18) };
  font-weight: 600;

  > span {
    font-size: ${ rem(16) };
    font-weight: 400;
    margin-left: ${ rem(8) };
  }
`

export const PostTextareaWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
`

export const PostTextarea = styled.textarea`
  border-radius: ${ rem(8) };
  padding: ${ rem(16) } ${ rem(24) };
  resize: none;
  width: 100%;

  ${ ({ theme: { colors } }) => `
      background-color: ${ colors.whiteBlue1 };
      color: ${ colors.dark2 };

      &[aria-invalid="true"] {
        border: 1px solid ${ colors.red };
      }
  ` }
`

export const PostTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`

export const PostTagInputContainer = styled.div`
  position: relative;
`

export const PostTagLabel = styled.label`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-weight: 600;
  margin-right: ${ rem(24) };
`

export const PostTagListbox = styled.ul`
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  border-radius: ${ rem(2) };
  display: none;
  font-size: ${ rem(15) };
  inset: calc(100% + ${ rem(4) }) auto auto ${ rem(128) };
  max-height: ${ rem(200) };
  max-width: ${ rem(180) };
  overflow-y: scroll;
  padding: ${ rem(2) };
  position: absolute;
  width: 100%;
  z-index: 10;

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.white1 };
    border: 1px solid ${ colors.grey3 };
  ` }

  > li {
    border-radius: ${ rem(2) };
    padding: ${ rem(6) } ${ rem(4) };

    &[aria-selected="true"] {
      background-color: ${ ({ theme }) => theme.colors.whiteBlue1 };
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export const PostTagInput = styled.input`
  font-size: ${ rem(16) };
  min-width: ${ rem(160) };

  &[aria-expanded="true"] {

    + ${ PostTagListbox } {
      display: block;
    }
  }

  ${ ({ theme: { colors } }) => `
    border-bottom: 1px solid ${ colors.grey3 };
    color: ${ colors.dark2 };
  ` }
`

export const PostTagList = styled(RowCenter)`
  margin-top: ${ rem(24) };
`

export const PostTagItem = styled.li`
  border-radius: ${ rem(16) };
  font-weight: 600;
  font-size: ${ rem(13) };
  padding: ${ rem(4) } ${ rem(12) };
  position: relative;
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-right: ${ rem(12) };
  }

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.darkBlue };
    color: ${ colors.white1 };
  ` }
`

export const PostTagButton = styled.button`
  border-radius: 50%; 
  background: url("/icons/remove.svg") no-repeat center center;
  height: ${ rem(20) };
  inset:  -${ rem(10) } -${ rem(10) } auto auto;
  position: absolute;
  width: ${ rem(20) };

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.white1 };
    border: .5px solid ${ colors.darkBlue }
  ` }
`

export const PostTagSubmit = styled.button`
  align-self: start;
  border-radius: ${ rem(8) };
  font-size: ${ rem(17) };
  font-weight: 600;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  padding: ${ rem(12) } 0;

  ${ ({ theme: { colors } }) => `
    background-color: ${ colors.blue };
    color: ${ colors.white1 };
  ` }
`
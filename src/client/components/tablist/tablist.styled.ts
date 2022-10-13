import styled from "styled-components"
import { rem } from "@/styled/functions"
import { RowCenter } from "@/styled/shared/helpers"


export const TablistWrapper = styled.div`
  position: relative;
`

export const TabSelection = styled(RowCenter)`
  height: ${ rem(40) };
`

export const Tab = styled.button`
  font-size: ${ rem(15) };
  font-weight: 600;

  &:not(:last-of-type) {
    margin-right: ${ rem(18) };
  }

  ${ ({ theme: { colors } }) => `
    color: ${ colors.grey3 };

    &[aria-selected="true"] {
      color: ${ colors.dark2 };
      position: relative;

      &::after {
        content: "";
        background-color: ${ colors.green };
        height: ${ rem(3) };
        inset: auto auto -${ rem(8) } 0;
        position: absolute;
        width: 100%;
      }
    }
  ` }
`
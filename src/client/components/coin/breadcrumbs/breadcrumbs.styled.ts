import styled from "styled-components"
import { rem } from "@/styled/functions"
import { RowCenter } from "@/styled/shared/helpers"


export const BreadCrumbsWrapper = styled.nav``

export const BreadCrumbsList = styled(RowCenter)`
  font-weight: 600;

  ${ ({ theme: { colors } }) => `

    li {
      color: ${ colors.darkBlue };

      &:first-of-type {
        color: ${ colors.grey3 };
        margin-right: ${ rem(32) };
        position: relative;

        &::after {
          content: ">";
          color: ${ colors.darkBlue };
          inset: 50% -${ rem(16) } auto auto;
          position: absolute;
          transform: translate(0, -60%);
        }
      }
    }
  ` }
`
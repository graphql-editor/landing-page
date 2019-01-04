import { style } from "typestyle"
import { colors } from "../../style/vars"



export const FooterWidget = style({
  display: "flex",
  flexFlow:'column nowrap',
  $nest: {
    h4: {
      fontSize: 16,
      color: "white",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: 28
    },

    p: {
      color: colors.whiteDark,
      marginBottom: 25,
      letterSpacing: "1px"
    },

    ul: {
      listStyle: "none",

      $nest: {
        li: {
          marginBottom: 14,

          $nest: {
            a: {
              fontSize: 14,
              color: colors.whiteDark,
              letterSpacing: "1px"
            }
          }
        }
      }
    },
  }
});
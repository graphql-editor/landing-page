import { style } from "typestyle"
import { colors } from "../../style/vars"

export const FooterWidget = style({
  width: "19%",
  float: "left",
  display: "inline-block",
  marginBottom: 115,

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

    "@media screen and (max-width: 480px)": {
      width: "100%",
      textAlign: "center",
      marginBottom: 40,
    },

    "@media screen and (min-width: 480px) and (max-width: 768px)": {
      width: "50%",
      wordWrap: "break-word",
      marginBottom: 40,

      "&:nth-child(4)": {
        clear: "initial"
      }
    },

    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      width: "33%",
      wordWrap: "break-word",

      "&:nth-child(4)": {
        clear: "both"
      }
    },
  }
});
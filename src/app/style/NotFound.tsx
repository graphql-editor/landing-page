import { style } from "typestyle"
import { colors } from "./vars"

export const ErrorPage = style({
  background: colors.main,
 
  $nest: {
    '.inside': {
      paddingTop: 264,
      paddingBottom: 264,

      $nest: {
        'h2, h4, p': {
          color: colors.white,
          lineHeight: "normal"
        },

        h2: {
          fontSize: 156,
          marginBottom: 30,
        },

        h4: {
          fontSize: 44,
          marginBottom: 18,
          letterSpacing: "2px",
        },

        p: {
          fontSize: 16,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }
      }
    }
  }
})
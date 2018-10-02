import { style } from "typestyle"
import { colors } from "./vars"

export const ErrorPage = style({
  //background: colors.main,
 
  $nest: {
    '.inside': {
      padding: "50px 0 100px",

      $nest: {
        'h2, h4, p': {
          color: colors.signup,
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
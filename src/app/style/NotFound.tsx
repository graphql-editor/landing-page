import { style } from "typestyle";
import { colors } from "./vars";

export const ErrorPage = style({
  //background: colors.main,

  $nest: {
    ".inside": {
      padding: "50px 0 100px",

      $nest: {
        "@media screen and (max-width: 768px)": {
          $nest: {
            h2: { fontSize: 100 },
            h4: { fontSize: 30 },
            p:  { fontSize: 14 }
          }
        },

        "@media screen and (max-width: 991px)": {
          padding: "10px 0 50px"
        },

        // "h2, h4, p": {
        //   color: colors.pink,
        //   lineHeight: "normal",
        //   textAlign: "center"
        // },

        h2: {
          fontSize: 156,
          marginBottom: 30,

          color: colors.pink,
          lineHeight: "normal",
          textAlign: "center"
        },

        h4: {
          fontSize: 44,
          marginBottom: 18,
          letterSpacing: "2px",

          color: colors.pink,
          lineHeight: "normal",
          textAlign: "center"
        },

        p: {
          fontSize: 16,
          textTransform: "uppercase",
          letterSpacing: "2px",

          color: colors.pink,
          lineHeight: "normal",
          textAlign: "center"
        }
      }
    }
  }
});

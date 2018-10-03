import { style } from "typestyle";
import { colors } from "../../style/vars";

export const GifBackground = style({
  display: "block",
  margin: "60px auto 220px",
  width: "100%",
  zIndex: 1,

  $nest: {
    ".inside": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      $nest: {
        ".text-content": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left"
        },

        b: {
          color: colors.pink
        },

        h1: {
          fontSize: 46,
          color: colors.pink, //colors.textLight,
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontWeight: 600,
          margin: 0
        },

        p: {
          color: colors.textLight,
          fontSize: 18,
          //textTransform: "uppercase",
          letterSpacing: "1px",
          //marginBottom: 20
          margin: `15px 0 35px`,
          width: "80%"
          //textAlign: "center"
        },

        input: {
          width: 320,
          //border: "none",
          height: 45,
          padding: "0 90px 0 24px",
          lineHeight: "45px",
          boxShadow: "1px 1px 5px rgba(98, 129, 157, 0.15)", //"1px 1px 22px rgba(98, 129, 157, 0.15)",
          borderRadius: 7,
          backgroundColor: colors.white,
          color: colors.textLight,
          fontSize: 14,
          marginRight: 15
        },

        button: {
          width: "auto"
        },

        img: {
          height: 120,
          display: "block",
          margin: "0 auto 50px",

          $nest: {
            "&:last-of-type": {
              height: "auto",
              width: "100%",
              margin: `0 0 0 auto`
            }
          }
        },

        "@media screen and (max-width: 768px)": {
          width: "100%",
          alignItems: "center",

          $nest: {
            ".text-content": {
              alignItems: "center",
              textAlign: "center",

              $nest: {
                h1: {
                  marginBottom: 30
                },
              
                form: {
                  marginBottom: 40,

                  $nest: {
                    "input, button": {
                      display: "block",
                      margin: "0 0 15px",
                      width: "100%"
                    },

                    button: { width: "100%" }
                  }
                }
              }
            }
            // input: {
            //   marginBottom: 15
            // }
          }
        },

        "@media screen and (max-width: 991px)": {
          $nest: {
            h1: { fontSize: 30 }
          }
        },

        "@media screen and (max-width: 1200px)": {
          $nest: {
            input: { marginBottom: 10 }
          }
        }
      }
    },

    "@media screen and (max-width: 768px)": {
      margin: "0 auto 150px",

      $nest: {
        ".row": { margin: 0 }
      }
    }
  }
});

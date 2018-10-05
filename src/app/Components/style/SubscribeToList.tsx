import { style } from "typestyle";
import { colors } from "../../style/vars";

export const PrefooterCreateAccount = style({
  overflow: "visible",
  padding: "61px 0 45px 0",
  backgroundColor: colors.grey, //"#298bef",

  $nest: {
    ".col-lg-4": {
      display: "flex"
    },

    h3: {
      fontSize: 28,
      color: colors.textLight, //colors.white,
      letterSpacing: "2px",
      paddingTop: 0,
      margin: "auto 0"
    },

    form: {
      marginLeft: 13,

      $nest: {
        input: {
          width: 470,
          border: "none",
          height: 45,
          padding: "0 90px 0 24px",
          lineHeight: "45px",
          boxShadow: "1px 1px 3px rgba(98, 129, 157, 0.15)", //"1px 1px 22px rgba(98, 129, 157, 0.15)",
          borderRadius: 7,
          backgroundColor: colors.white,
          color: colors.textLight,
          fontSize: 14
        },

        button: {
          width: "auto",
          position: "relative",
          top: 0,
          marginLeft: 16,
          border: "none",
          padding: "15px 50px",
          background: colors.pink,
          fontSize: "15px",
          color: colors.white,
          //boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
          borderRadius: 7,
          display: "inline-block",
          textTransform: "uppercase"
        },

        "@media screen and (max-width: 768px)": {
          $nest: {
            button: {
              display: "block",
              width: "100%",
              maxWidth: "100%"
            },
            input: { width: "100%" }
          }
        },

        "@media screen and (min-width: 768px) and (max-width: 1200px)": {
          $nest: {
            input: {
              width: 340,
              marginRight: 10
            }
          }
        }
      }
    },

    "@media screen and (max-width: 768px)": {
      $nest: {
        h3: {
          textAlign: "center",
          width: "100%"
        },
        input: { margin: "0 0 10px" },
        button: { width: "100%" }
      }
    },

    "@media screen and (max-width: 991px)": {
      padding: "30px 0 45px 0",

      $nest: {
        h3: {
          paddingBottom: 10
        },

        form: {
          marginLeft: 0,

          $nest: {
            button: {
              //display: "block",
              marginLeft: 0
            }
          }
        }
      }
    }
  }
});

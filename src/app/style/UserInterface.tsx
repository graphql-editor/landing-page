import { style } from "typestyle";
import { colors } from "./vars";

export const TopPanel = style({
  padding: "26px 0 19px 0",
  marginBottom: 100,
  boxShadow: "1px 1px 19px rgba(28, 61, 94, 0.17)",
  backgroundColor: colors.white,

  $nest: {
    ".nav": {
      textAlign: "center",
      border: "none",
      display: "block",

      $nest: {
        li: {
          float: "none",
          display: "inline-block",
          position: "relative",
          marginBottom: 0,
          marginRight: 60,

          $nest: {
            span: {
              color: "rgba(57, 51, 91, 0.9)",
              padding: 0,
              border: "none",
              fontSize: 13,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer"
            },

            i: {
              width: 21,
              verticalAlign: "middle",
              marginRight: 5
            },

            "&.active": {
              $nest: {
                span: {
                  color: colors.main
                },

                i: {
                  fill: colors.main
                }
              }
            }
          }
        }
      }
    }
  }
});

export const TabContent = style({
  paddingBottom: 100,

  $nest: {
    ".tab-pane": {
      display: "block"
    },

    h5: {
      color: colors.text,
      fontSize: 32,
      marginBottom: 31,
      textAlign: "center",
      letterSpacing: "3px"
    },

    ".content": {
      width: 600,
      display: "flex",
      "-ms-flex-pack": "justify",
      justifyContent: "space-between",
      padding: "28px 30px 37px 30px",
      margin: "0 auto 30px",
      boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
      borderRadius: 3,
      backgroundColor: colors.white,

      $nest: {
        a: { display: "inline-block" }
      }
    },

    ".center": {
      padding: "0 120px 0 12px"
    },

    ".last": {
      textAlign: "right",

      $nest: {
        span: {
          marginTop: 50
        }
      }
    },

    a: {
      color: colors.main,
      fontSize: 16,
      marginBottom: 16,
      borderBottom: `1px solid ${colors.main}`,
      paddingBottom: 3
    },

    ul: {
      marginBottom: 34,

      $nest: {
        li: {
          color: colors.textLight,
          fontSize: 15,
          marginBottom: 9,
          letterSpacing: "1px"
        }
      }
    },

    span: {
      color: colors.textLight,
      display: "inline-block",

      $nest: {
        b: {
          display: "block",
          color: colors.text,
          fontWeight: "normal",
          marginBottom: 6
        }
      }
    }
  }
});

export const ChangePassword = style({
  padding: `29px 30px 30px 30px`,
  textAlign: "right",
  width: 600,
  margin: "0 auto",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
  borderRadius: 3,
  backgroundColor: colors.white,
  overflow: "hidden",

  $nest: {
    div: {
      overflow: "hidden"
    },

    span: {
      float: "left",
      color: colors.text,
      fontSize: 18,
      fontWeight: 900,
      letterSpacing: "2px",
      display: "inline-block"
    },

    ".toggle": {
      cursor: "pointer",
      float: "right",
      color: colors.main,
      fontSize: 15,
      marginBottom: 0,
      display: "inline-block",
      letterSpacing: "1px",
      borderBottom: `1px solid ${colors.main}`,
      paddingBottom: 3
    }
  }
});

export const UserDataList = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left", //"right"
  // alignItems: "center",
  // width: "100%",

  $nest: {
    div: {
      overflow: "hidden"
    },

    "p, .content-nav": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center"
    },

    "p:first-of-type": {
      marginTop: 10
    },

    ".content-nav": {
      // marginBottom: 10,

      $nest: {
        h6: {
          color: colors.text,
          float: "left",
          display: "inline-block"
        },

        ".toggle": {
          color: colors.main,
          borderBottom: `1px solid ${colors.main}`,
          cursor: "pointer",
          float: "right",
          display: "inline-block",
          marginBottom: 0
        }
      }
    },

    span: {
      color: colors.textLight,
      fontSize: 15,
      letterSpacing: "1px",
      marginBottom: 9
    }
  }
});

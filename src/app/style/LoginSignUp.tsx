import { style } from "typestyle"
import { colors } from "./vars"

export const LoginBg = style({
  paddingBottom: 150,
  background:
    "#f6fafd linear-gradient(to top, #ffffff 0%, #ffffff 1%, #f5fafd 80%, #f5fafd 100%)",
  paddingTop: 115,

  $nest: {
    ".create": {
      fontSize: 15,
      color: colors.grey2,
      letterSpacing: "1px",
      textAlign: "center",

      $nest: {
        a: {
          display: "inline-block",
          textDecoration: "underline"
        }
      }
    }
  }
})

export const LoginContactForm = style({
    width: 540,
    margin: "115px auto 37px",
    padding: "41px 60px 40px 65px",
    boxShadow: "1px 1px 44px rgba(38, 63, 90, 0.09)",
    borderRadius: 5,
    backgroundColor: colors.white,

    $nest: {
      h2: {
        color: colors.text,
        fontSize: 38,
        letterSpacing: "1px",
        marginBottom: 50
      },

      button: {
        padding: "15px 42px",
        fontSize: 15,
        color: colors.white,
        borderRadius: 7,
        textTransform: "uppercase",
        border: "none",
        transition: "0.2s linear",
        backgroundColor: colors.main,
        cursor: "pointer",
        lineHeight: "inherit",
      },

      ".form-group": {
        marginBottom: 51,

        $nest: {
          input: {
            width: "100%",
            fontSize: 15,
            color: colors.text,
            paddingBottom: 18,
            border: "none",
            borderBottom: "2px solid #dee6eb",
            letterSpacing: "1px"
          },

          label: {
            fontSize: 15,
            color: colors.grey2,
            display: "block",
          },

          textarea: {
            width: "100%",
            color: colors.grey2,
            height: 183,
            border: "2px solid #dee6eb",
            marginTop: 22
          },

          button: {
            float: "right"
          },

          "&:last-child": {
            //float: "right",
            marginTop: "-13px",
            marginBottom: 0,
            boxSizing: "border-box",
            height: 45
          },

          "&:last-child a": {
            float: "left",
            paddingTop: 12,
            display: "inline-block"
          },

          ".select": {
            fontSize: 15,
            color: colors.grey2,
            letterSpacing: "1px",
            width: "100%",
            paddingBottom: 22,
            borderBottom: "2px solid #dee6eb",
            background: "url(../images/down-select.png) no-repeat 97% 50%",
            position: "relative",

            $nest: {
              ".select-hidden": {
                display: "none",
                visibility: "hidden",
                paddingRight: 10
              },

              ".select-options": {
                display: "none",
                position: "absolute",
                top: "100%",
                right: 0,
                left: 0,
                zIndex: 999,
                margin: 0,
                padding: 0,
                width: 195,
                borderRadius: 5,
                listStyle: "none",
                boxShadow: "1px 2px 40px rgba(28, 30, 32, 0.14)",
                backgroundColor: colors.white,

                $nest: {
                  "&::before": {
                    left: "15%",
                    content: '""',
                    top: "-7px",
                    "-ms-transform": "translateX(-50%)",
                    transform: "translateX(-50%)",
                    display: "inline-block",
                    borderLeft: " 8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderBottom: "7px solid #fff",
                    position: "absolute"
                  },

                  li: {
                    textTransform: "capitalize",
                    fontSize: 16,
                    margin: 0,
                    padding: "14px 30px",
                    color: "rgba(35, 120, 236, 0.9)",

                    $nest: {
                      "&:first-child": {
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
})
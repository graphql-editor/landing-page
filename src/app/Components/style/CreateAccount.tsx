import { style } from "typestyle"
import { colors } from "../../style/vars"

export const PreFooter = style({
  marginTop: "-170px",
  marginBottom: "-3.4%",

  $nest: {
    img: {
      width: "100%",
      height: "auto"
    }
  }
})

export const PrefooterCreateAccount = style({
  overflow: "visible",
  padding: "61px 0 45px 0",
  backgroundColor: colors.grey, //"#298bef",

  $nest: {
    h3: {
      fontSize: 28,
      color: colors.textLight, //colors.white,
      letterSpacing: "2px",
      paddingTop: 0,
      marginTop: "-5px"
    },

    form: {
      marginLeft: 13,

      $nest: {
        ".form-group": {
          display: "inline-block",
          position: "relative",

          $nest: {
            input: {
              width: 484,
              border: "none",
              height: 45,
              padding: "0 90px 0 24px",
              lineHeight: "45px",
              boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.15)",
              borderRadius: 7,
              backgroundColor: colors.white,
              color: colors.textLight,
              fontSize: 14
            },

            ".select": {
              top: 17,
              right: 10,
              border: "none",
              position: "absolute",
              paddingRight: 18,
              color: "#7782aa",
              fontSize: 14,
              textTransform: "uppercase",
              background:
                "transparent url(assets/images/down.png) no-repeat 86% 33%",
              cursor: "pointer",
              display: "inline-block",
              width: 70,
              height: 20,

              $nest: {
                '.select-hidden': {
                  display: "none",
                  visibility: "hidden",
                  paddingRight: 10
                },
                '.select-styled': {
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  transition: "0.2s linear"
                },
                '.select-options': {
                    display: "none",
                    position: "absolute",
                    top: 45,
                    left: "-40px",
                    zIndex: 999,
                    margin: 0,
                    padding: 0,
                    width: "195px",
                    borderRadius: 5,
                    listStyle: "none",
                    boxShadow: "1px 2px 40px rgba(28, 30, 32, 0.14)",
                    backgroundColor: colors.white,

                    $nest: {
                      "&::before": {
                          content: '""',
                          top: "-7px",
                          left: "50%",
                          "-ms-transform": "translateX(-50%)",
                          transform: "translateX(-50%)",
                          display: "inline-block",
                          borderLeft: "8px solid transparent",
                          borderRight: "8px solid transparent",
                          borderBottom: "7px solid #fff",
                          position: "absolute"
                      },
                      li: {
                        margin: 0,
                        padding: "14px 30px",
                        fontSize: 14,
                        textTransform: "uppercase",
                        color: "rgba(35, 120, 236, 0.9)",

                        $nest: {
                          "&:first-child": {
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5,
                          }
                        }
                      }
                    }
                }
              }
            }
          }
        },

        ".custom-btn": {
          position: "relative",
          top: 0,
          marginLeft: 16,
          border: "none",
          padding: "15px 50px",
          background:
            colors.signup,
          fontSize: "15px",
          color: colors.white,
          boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
          borderRadius: 7,
          display: "inline-block",
          textTransform: "uppercase"
        },

        "@media screen and (max-width: 768px)": {
          $nest: {
            '.custom-btn, .form-group, .form-group input': {
              width: "100% !important",
              marginLeft: 0
            }
          }
        },

        "@media screen and (min-width: 991px) and (max-width: 1200px)": {
          $nest: {
            '.form-group input': {
              width: 340
            }
          }
        },
      }
    },

    "@media screen and (max-width: 576px)": {
      $nest: {
        h3: {
          textAlign: "center"
        }
      }
    },

    "@media screen and (max-width: 991px)": {
      padding: "30px 0 45px 0",

      $nest:{ 
        h3: {
          paddingBottom: 10
        },

        form: {
          marginLeft: 0,

          $nest: {
            '.form-group, .form-group input': {
              //width: "100% !important",
              marginLeft: "0"
            }
          }
        }
      }
    },
  }
})

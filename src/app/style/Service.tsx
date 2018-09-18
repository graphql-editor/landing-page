import { style, classes } from "typestyle"
import { colors } from "./vars"
import { PricingList } from "./Home"

export const ServicePage = style({
  $nest: {
    ".container": {
      width: 1010
    }
  }
})

export const ChoicePlan = style({
  marginBottom: 112,
  padding: "160px 0 0",
  paddingTop: 160,
  background: `${
    colors.grey
  } url(../assets/images/choice-plan.png) no-repeat top`,

  $nest: {
    "@media screen and (max-width: 768px)": {
      marginBottom: 60
    },

    "@media screen and (max-width: 991px)": {
      padding: "120px 0 0"
    },

    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      paddingTop: 145
    },

    ".container": {
      width: 1010
    },

    h2: {
      fontSize: 46,
      color: colors.white,
      letterSpacing: "2px",
      marginBottom: 24,
      fontWeight: 300
    },

    ".nav-tabs": {
      marginBottom: 56,
      border: "none",
      width: "100%",
      textAlign: "center",
      display: "inline-block",

      $nest: {
        "li > a": {
          position: "relative",
          display: "block"
        },
        li: {
          float: "none",
          display: "inline-block",
          border: "2px solid #74a0fb",
          //marginRight: "-4px",

          $nest: {
            "&:first-child": {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            },
            "&:last-child": {
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5
            },
            "&.active": {
              backgroundColor: colors.white,
              borderColor: colors.white,
              $nest: {
                a: { color: colors.darkerBlue }
              }
            },

            a: {
              borderRadius: 0,
              color: colors.whiteDark,
              fontSize: 14,
              letterSpacing: "1px",
              marginRight: 0,
              border: "none",
              padding: "8px 37px",
              backgroundColor: "transparent",
              textTransform: "uppercase"
            }
          }
        }
      }
    },
    ".tab-content": {
      paddingBottom: 18,

      $nest: {
        ".active": {
          display: "block"
        },
        ".tab-content > .tab-pane": {
          display: "none"
        }
      }
    }
  }
})

export const ServicePricingList = classes(
  PricingList,
  style({
    $nest: {
      li: {
        width: "30.7%",
        float: "none",
        padding: "43px 35px 28px 35px",
        marginRight: 33
      },
      ul: {
        marginBottom: 15,
        display: "inline-block",

        $nest: {
          li: {
            width: "auto",
            float: "none",
            marginRight: 0,
            boxShadow: "none",
            marginBottom: 17,
            backgroundColor: "transparent",
            borderRadius: 0,
            padding: 0,
            display: "block",
            letterSpacing: 0
          }
        }
      }
    }
  })
)

export const InfoPlan = style({
  paddingBottom: 83,

  $nest: {
    img: {
      marginBottom: 28
    },

    h5: {
      color: colors.text,
      fontSize: 18,
      letterSpacing: "2px",
      marginBottom: 18
    },

    p: {
      color: colors.textLight,
      fontSize: 14,
      letterSpacing: "1px",
      lineHeight: "23px"
    }
  }
})

export const BlockFeatures = style({
  marginBottom: "-80px",

  $nest: {
    ".row": {
      display: "flex",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
      "-ms-flex-direction": "row",
      flexDirection: "row",

      $nest: {
        "@media screen and (max-width: 768px)": {
          flexDirection: "column"
        },
        "@media screen and (max-width: 991px)": {
          alignItems: "center",
          flexDirection: "column"
        },
        "@media screen and (min-width:991) and (max-width: 1330px)": {
          justifyContent: "center"
        }
      },

      h3: {
        color: colors.text,
        fontSize: 32,
        marginTop: 5,
        marginBottom: 19,
        letterSpacing: "3px"
      },

      p: {
        color: colors.textLight,
        marginBottom: 65,
        fontSize: 14,
        letterSpacing: "1px"
      },

      img: {
        marginLeft: 60,
        maxWidth: 516,

        $nest: {
          "@media screen and (min-width:991) and (max-width: 1440px)": {
            maxWidth: "100%",
            marginLeft: 0
          }
        }
      }
    }
  }
})

//table
export const InfoPlans = style({
  background: "#f6fafd url(../assets/images/bg-servise-2.png) no-repeat top",
  paddingTop: 268,

  $nest: {
    ".title-head": {
      marginBottom: 10
    },

    p: {
      color: colors.textLight,
      fontSize: 14,
      textAlign: "center",
      letterSpacing: "1px",
      marginBottom: 45
    },

    table: {
      width: "100%",
      boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
      borderRadius: 3,
      zIndex: 999,
      position: "relative",
      backgroundColor: colors.white,

      $nest: {
        tr: {
          padding: "0 40px",

          $nest: {
            td: {
              color: colors.textLight,
              fontSize: 15,
              letterSpacing: "1px",
              textAlign: "center",
              padding: "10px 0",

              $nest: {
                "&.text-left": {
                  width: "27%",
                  textAlign: "left",
                  paddingLeft: 40
                },
                
                b: {
                  color: colors.text,
                }
              }
            },

            '&.offset-inside td': {
              paddingTop: 43,
            }
          }
        },

        "thead tr td": {
          paddingTop: 35,
          color: colors.text,
          fontSize: 18,
          letterSpacing: "1px",
          textAlign: "center",
          padding: "10px 0",
          fontWeight: 700,

          $nest: {
            "&:first-child": {
              paddingBottom: 18
            },

            "&.text-left": {
              width: "27%",
              textAlign: "left",
              paddingLeft: 40
            }
          }
        },

        "tbody td": {
          $nest: {
            '&.background': {
              background: "rgba(230, 237, 246, 0.4)"
            }
          }
        }
      }
    }
  }
})

export const BottomInfoPlans = style({
  marginTop: "-240px",
  padding: "260px 0 175px 0",
  marginBottom: 80,
  background: "url(../assets/images/bottom-info-plans.png) no-repeat center",

  $nest: {
    '.title-head': {
      color: colors.white,
      marginTop: 100,
      marginBottom: 7,
      fontWeight: 400
    },
    
    p: {
      textAlign: "center",
      fontSize: 14,
      marginBottom: 25,
      color: "rgba(205, 220, 236, 0.8)"
    },

    '.custom-btn': {
      padding: "16px 29px",
      fontSize: 15
    },

    '.partner-slider': {
      marginTop: 85,
      textAlign: "center",
      cursor: "all-scroll",
    }
  }
})
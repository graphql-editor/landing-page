import { style, classes } from "typestyle";
import { colors } from "./vars";
import { FeatureList } from "./Home";

export const ServicePage = style({
  $nest: {
    ".container": {
      width: 1010
    }
  }
});

export const ChoicePlan = style({
  paddingTop: 30, // 60
  marginBottom: 30, // 60

  $nest: {
    ".container": {
      width: 1010,

      $nest: {
        "@media screen and (min-width: 768px) and (max-width: 991px)": {
          width: 750
        },

        "@media screen and (max-width: 768px)": {
          width: "auto"
        }
      }
    },

    h2: {
      fontSize: 46,
      color: colors.white,
      letterSpacing: "2px",
      marginBottom: 50,
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
    },
    "@media screen and (max-width: 768px)": {
      marginBottom: 60
    },

    "@media screen and (max-width: 991px)": {
      padding: '60px 0 0',  //"120px 0 0"
      $nest: {
        li: {
          float: "none",
        }
      }
    },

    "@media screen and (min-width: 992px) and (max-width: 1200px)": {
      paddingTop: 105 //145
    },
  }
});

export const ChoicePlanPrices = classes(ChoicePlan, style({
  marginBottom: 112,
  padding: "160px 0 0",
  paddingTop: 140,
  background: `url(../assets/images/choice-plan.png) no-repeat top`, //colors.gray
}))

export const ServicePricingList = classes(
  FeatureList,
  style({
    $nest: {

      '> li': {
        height: 615,
        overflow: "hidden"
      },

      li: {
        width: "30.7%",
        //float: "none",
        padding: "43px 35px 28px 35px",
        marginRight: 33,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        $nest: {
          div: {
            width: "100%",
          }
        }
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
            marginBottom: 0,
            lineHeight: "26px",
            backgroundColor: "transparent",
            borderRadius: 0,
            padding: 0,
            display: "block",
            letterSpacing: 0,
          },
        }
      },

      "@media screen and (max-width: 480px)": {
        $nest: {
          '> li': {
            width: "85% !important"
          }
        }
      },

      "@media screen and (max-width: 991px)": {
        $nest: {
          "> li": {
            height: "auto",
            width: "75%",
            margin: "30px auto",
            marginRight: "auto",
            display: "block",

            
            $nest: {
              "&:last-child": {
                marginRight: "auto"
              }
            }
          }
        }
      },

      "@media screen and (min-width: 991px) and (max-width: 1200px)": {
        display: "inline-block",
  
        li: {
          width: "30.7%",
          ".custom-btn": {
            fontSize: 12
          }
        }
      }
    }
  })
);

export const InfoPlan = style({
  //paddingBottom: 83,
  paddingBottom: 43,

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
      lineHeight: "23px",

      textAlign: "left"
    }
  }
});

export const BlockFeatures = style({
  marginBottom: "180px",

  $nest: {
    ".row": {
      display: "flex",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
      "-ms-flex-direction": "row",
      flexDirection: "row",

      $nest: {
        '.text': {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start"
        },

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
});


// export const BottomInfoPlans = style({
//   marginTop: "-240px",
//   padding: "260px 0 175px 0",
//   marginBottom: 80,
//   background: "url(../assets/images/bottom-info-plans.png) no-repeat center",

//   $nest: {
//     ".title-head": {
//       color: colors.white,
//       marginTop: 100,
//       marginBottom: 7,
//       fontWeight: 400
//     },

//     p: {
//       textAlign: "center",
//       fontSize: 14,
//       marginBottom: 25,
//       color: "rgba(205, 220, 236, 0.8)"
//     },

//     ".custom-btn": {
//       padding: "16px 29px",
//       fontSize: 15,
//       marginBottom: 60
//     },

//     ".partner-slider": {
//       marginTop: 85,
//       textAlign: "center",
//       cursor: "all-scroll"
//     }
//   }
// });

export const PricesSlider = style({
  marginBottom: 150
})
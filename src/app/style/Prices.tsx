import { style, classes } from "typestyle";
import { colors } from "./vars";
import { FeatureList } from "./Home";

export const ChoicePlan = style({
  paddingTop: 30, // 60
  marginBottom: 30, // 60

  $nest: {
    "@media screen and (max-width: 768px)": {
      marginBottom: 60
    },

    "@media screen and (max-width: 991px)": {
      padding: "20px 0 0", //"120px 0 0"
      $nest: {
        li: {
          float: "none"
        }
      }
    },

    "@media screen and (min-width: 992px) and (max-width: 1200px)": {
      paddingTop: 105 //145
    },

    h2: {
      fontSize: 46,
      color: colors.pink,
      letterSpacing: "2px",
      marginBottom: 50,
      fontWeight: 300
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
});

export const ChoicePlanPrices = classes(
  ChoicePlan,
  style({
    marginBottom: 112,
    padding: "50px 0 0"
    //paddingTop: 140,
    //background: `url(${require("../../assets/images/choice-plan.png")}) no-repeat top`, //colors.gray
  })
);

export const ServicePricingList = classes(
  FeatureList,
  style({
    $nest: {
      "> li": {
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
            width: "100%"
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
            letterSpacing: 0
          }
        }
      },

      "@media screen and (max-width: 480px)": {
        $nest: {
          "> li": {
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
    "@media screen and (max-width: 768px)": {
      $nest: {
        img: {
          margin: "0 auto 28px",
          display: "block"
        },
        h5: {
          textAlign: "center"
        },
        p: { textAlign: "center", marginBottom: 30 }
      }
    },

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
        ".text": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start"
        },

        // '.text-left': {
        //   display: "flex",
        //   alignItems: 'flex-end'
        // },

        "@media screen and (max-width: 768px)": {
          flexDirection: "column",
          $nest: {
            h3: { textAlign: "center" },
            p: { textAlign: "center" }
          }
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
        //marginLeft: 60,
        margin: "0 0 0 auto",
        display: "block",
        maxWidth: 450,

        $nest: {
          "@media screen and (min-width:991) and (max-width: 1440px)": {
            maxWidth: "100%",
            margin: 0
          }
        }
      }
    }
  }
});


export const PricesSlider = style({
  marginBottom: 120
});

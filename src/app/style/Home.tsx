import { style, classes } from "typestyle"
import { colors } from "./vars"

// export const Container = style({
//   width: "100%",
//   padding: "0 15px",
//   margin: "0 auto",
//   border: 0,
//   fontSize: "100%",

//   $nest: {
//     "@media only screen and (min-width: 576px)": {
//       width: 540
//     },
//     "@media only screen and (min-width: 768px)": {
//       width: 750
//     },
//     "@media only screen and (min-width: 992px)": {
//       width: 970
//     },
//     "@media only screen and (min-width: 1200px)": {
//       width: 1140
//     }
//   }
// })

export const PartnersSlider = style({
  display: "block",
  paddingBottom: 10,

  $nest: {
    ".owl-stage-outer": {
      position: "relative",
      overflow: "hidden",
      "-webkit-transform": "translate3d(0,0,0)",

      $nest: {
        ".owl-stage": {
          $nest: {
            ".owl-item": {
              display: "block",
              float: "left",

              $nest: {
                img: {
                  // width: 140,
                  height: 70,
                  borderRadius: 6
                }
              }
            }
          }
        }
      }
    },
    "@media screen and (max-width: 480px)": {
      // paddingBottom: 20,
      marginBottom: 30
    },

    "@media screen and (max-width: 768px)": {
      // paddingBottom: 40,
      marginBottom: 0
    }
  }
})

export const PartnersSection = style({
  textAlign: "center",
  //paddingBottom: 47,
  marginBottom: 65,
  borderBottom: "2px solid rgba(219, 234, 248, 0.6)",
  overflow: "hidden",

  $nest: {
    "owl-item": {
      float: "left"
    },

    h5: {
      margin: "40px 0 20px",
      fontSize: 15,
      marginBottom: 45,
      letterSpacing: 1,
      textTransform: "uppercase",

      color: colors.signup
    }
  }
})


export const HowItWorks = style({
  marginBottom: 80,

  $nest: {
    h2: {
      color: colors.text,
      fontSize: 32,
      letterSpacing: "3px",
      marginBottom: 60,
      textAlign: "center"
    },

    '.gif': {
        background: `url(${require("../../assets/images/diagram.gif")})`,
        backgroundSize: "cover",
        height: 500,

        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        borderRadius: 7,


        boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.5)",
    },

    "@media screen and (max-width: 576px)": {
      display: "none"
    },

    "@media screen and (min-width: 576px) and (max-width: 768px)": {
      $nest: {
        '.gif': {
          height: 390
        }
      }
    },
  }
})





export const WhyUsSection = style({
    background: colors.grey,
    display: "flex"
  })


export const HostingSoftware = style({
  marginBottom: 113,

  $nest: {
    h2: {
      marginBottom: 71
    },

    "@media screen and (max-width: 768px)": {
      marginBottom: 80,

      h2: {
        fontSize: 24,
        lineHeight: "normal"
      },

      "ul li": {
        width: "50%",
        float: "left",
        marginRight: "0 !important",
        paddingRight: "0 !important",
        marginBottom: 30,

        "&:nth-child(2)": {
          border: "none"
        }
      }
    },

    "@media screen and (max-width: 991px)": {
      marginBottom: 80,

      h2: {
        lineHeight: "normal"
      },

      "ul li": {
        marginRight: 35,
        paddingRight: 35
      }
    }
  }
})

export const TitleHead = style({
  textAlign: "center",
  fontSize: 32,
  color: colors.text,
  marginBottom: 60,
  letterSpacing: 3
})

export const Counter = style({
  textAlign: "center",
  listStyle: "none",

  $nest: {
    li: {
      color: "#2e8ff3",
      fontSize: 50,
      textAlign: "center",
      textTransform: "uppercase",
      display: "inline-block",
      borderRight: "2px solid #e9f1f7",
      marginRight: 68,
      paddingRight: 72,

      $nest: {
        "&:last-child": {
          marginRight: 0,
          paddingRight: 0,
          borderRight: 0
        },

        span: {
          color: colors.lightGrey,
          fontSize: 16,
          textTransform: "uppercase",
          display: "block",
          marginTop: 27,
          letterSpacing: 1
        }
      }
    }
  }
})

export const WhyChoose = style({
  marginBottom: 88,
  overflow: "hidden"
})

// ************************ Pricing ************************

export const PricingTable = style({
  padding: "80px 0",
  background: colors.white, // colors.main, // "url(assets/images/bg-blue.png) no-repeat center",
  // backgroundSize: "cover",
  // marginBottom: 130,

  $nest: {
    ".container:last-of-type": {
      marginTop: 0,
    },

    h2: {
      color: colors.signup, //"white",
      marginBottom: "28px"
    },

    p: {
      textAlign: "center",
      marginBottom: 62,
      letterSpacing: 1,
      color: "rgba(205, 220, 236, 0.8)"
    },

    ".feature-box": {
      minHeight: "401.5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    },
  }
})

export const FeatureList = style({
  marginBottom: 45,
  width: "100%",
  clear: "both",
  display: "inline-block",

  $nest: {
    li: {
      width: "24.3%",
      float: "left",
      padding: "33px 29px 33px 35px",
      textAlign: "center",
      display: "inline-block",
      boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
      borderRadius: 3,
      backgroundColor: "white",
      marginRight: 10,

      $nest: {
        "&:last-of-type": {
          marginRight: 0
        },

        span: {
          color: colors.text
        },

        ".images": {
          marginBottom: 17,

          $nest: {
            img: {
              height: 50
            }
          }
        },

        h5: {
          color: colors.text,
          fontSize: 18,
          marginBottom: 9,
          letterSpacing: 1,
          fontWeight: 800
        },

        p: {
          color: colors.textLight,
          lineHeight: "22px",
          marginBottom: 18,
          minHeight: 160
        },

        '.line': {
          color: colors.text,
          display: "block",
          position: "relative",
          marginBottom: 15,

          $nest: {
            "&::before": {
              content: '""',
              top: 8,
              left: 0,
              width: "100%",
              height: 2,
              backgroundColor: "#d6dde4",
              display: "inline-block",
              position: "absolute"
            },

            b: {
              backgroundColor: colors.white,
              padding: "0 10px",
              fontSize: 14,
              color: colors.text,
              position: "relative",
              display: "inline-block"
            }
          }
        },

        ".price": {
          color: colors.text,
          fontSize: 32,
          marginBottom: 23,

          $nest: {
            span: {
              fontSize: 18,
              display: "inline-block",
              marginLeft: 3,
              letterSpacing: "2px"
            }
          }
        },

        ".custom-btn": {
          padding: "14px 15px",
          fontSize: 15,
          color: colors.white,
          boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
          borderRadius: 7,
          display: "inline-block",
          textTransform: "uppercase",
          backgroundColor: colors.signup, //colors.main,
          width: "100%"
        },

        "@media screen and (max-width: 768px)": {
          $nest: {
            p: {
              minHeight: "auto"
            }
          }
        }
      }
    },

    "@media screen and (max-width: 768px)": {
      $nest: {
        li: {
          width: "100%",
          marginRight: 0,
          marginBottom: 25
        }
      }
    },

    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      $nest: {
        li: {
          width: "48%",
          marginBottom: 15
        }
      }
    },

    "@media screen and (min-width: 992px) and (max-width: 1200px)": {
      display: "flex",
      flexDirection: "row",

      li: {
        width: "24%",

        ".custom-btn": {
          fontSize: 12
        }
      }
    }
  }
})

export const InfoPricing = style({
  padding: "50px 52px 20px 52px",
  boxShadow: "1px 1px 30px rgba(14, 21, 34, 0.07)",
  borderRadius: 4,
  backgroundColor: "white",
  width: "100%",
  display: "inline-block",

  $nest: {
    h4: {
      fontSize: 24,
      color: colors.text,
      marginBottom: "33px",
      letterSpacing: "2px"
    },

    ul: {
      width: "50%",
      float: "left",
      display: "inline-block",

      $nest: {
        "&.right": {
          paddingLeft: 44
        },

        li: {
          width: "100%",
          textAlign: "left",
          display: "inline-block",
          marginBottom: 34,
          background: `url(../assets/images/check.svg) no-repeat`,
          paddingLeft: 32,

          $nest: {
            h6: {
              color: colors.text,
              fontSize: 14,
              marginBottom: 8,
              letterSpacing: "1px"
            },

            p: {
              color: colors.textLight,
              textAlign: "left",
              marginBottom: 0
            },

            "&.button": {
              marginTop: 13,
              background: "none",

              $nest: {
                ".custom-btn": {
                  boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
                  borderRadius: 7,
                  backgroundColor: colors.signup, //colors.main,
                  display: "inline-block",
                  padding: "14px 40px 14px 38px",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  fontSize: 15,
                  color: "white"
                }
              }
            },

            "@media screen and (max-width: 768px)": {
              $nest: {
                ".buton": {
                  background: "red"
                }
              }
            }
          }
        }
      }
    },
    "@media screen and (max-width: 480px)": {
      $nest: {
        ul: {
          width: "100%",
          float: "none",

          "&.right": {
            paddingLeft: 0
          }
        },

        li: {
          backgroundSize: "8%"
        }
      }
    },

    "@media screen and (max-width: 768px)": {
      padding: "53px 30px 22px 30px",

      $nest: {
        "ul .custom-btn": {
          padding: "10px 15px !important",
          fontSize: "12px !important"
        }
      }
    }
  }
})

// ************************ Recommendations Slider ************************

export const UserSlider = style({
  marginBottom: 95,
  cursor: "all-scroll",
  position: "relative",
  //overflow: "hidden",

  $nest: {
    ".owl-stage-outer": {
      position: "relative",
      overflow: "hidden",
      "-webkit-transform": "translate3d(0,0,0)"
    },

    ".owl-stage": {
      position: "relative",

      $nest: {
        "&::after": {
          content: `"."`,
          display: "block",
          clear: "both",
          visibility: "hidden",
          lineHeight: 0,
          height: 0
        }
      }
    },

    ".owl-item": {
      float: "left",
      minHeight: 1
    },

    ".inside": {
      width: 740,
      margin: "0 auto",
      textAlign: "center",

      $nest: {
        ".icon": {
          width: "33px !important"
        },
        img: {
          margin: "0 auto 35px",
          display: "block"
        },
        p: {
          fontSize: 18,
          color: colors.lightGrey,
          lineHeight: "29px",
          marginBottom: 16,
          letterSpacing: "1px"
        },
        ".user": {
          color: "#526785",
          lineHeight: "26px",

          $nest: {
            a: {
              color: "#526785",

              $nest: {
                img: {
                  marginBottom: 15,
                  borderRadius: "100%",
                  width: "58px !important"
                }
              }
            },
            span: {
              color: colors.lightGrey,
              display: "block",
              letterSpacing: "1px",
              fontSize: 15
            }
          }
        }
      }
    },

    ".owl-nav": {
      position: "static",

      $nest: {
        ".owl-prev,  .owl-next": {
          width: 20,
          height: 35,
          top: "50%",
          fontSize: 0,
          marginTop: "-20px",
          "-ms-transform": "translateY(-50%)",
          transform: "translateY(-50%)",
          position: "absolute",
          zIndex: 99999,
          cursor: "pointer"
        },

        ".owl-prev": {
          background: "url(../assets/images/arrow-left-light.png) no-repeat",
          left: 50,
          $nest: {
            img: { display: "none" }
          }
        },

        ".owl-next": {
          background: "url(../assets/images/arrow-right-light.png) no-repeat",
          right: 50,
          $nest: {
            img: { display: "none" }
          }
        }
      }
    },

    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      paddingBottom: 100
    }
  }
})

export const CustomBtn = style({
  padding: "14px 15px",
  fontSize: 15,
  color: colors.white,
  boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
  borderRadius: 7,
  display: "inline-block",
  textTransform: "uppercase",
  backgroundColor: colors.main,
  cursor: "pointer"
})

export const CustomBtnGreen = classes(
  CustomBtn,
  style({
    background: colors.signup
      // "#0479ec linear-gradient(69deg, #37ddcb 0%, #42cbd1 80%, #42cbd1 100%)"
  })
)

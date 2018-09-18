import { style, classes } from "typestyle"
import { colors } from "./vars"

export const Container = style({
  width: "100%",
  padding: "0 15px",
  margin: "0 auto",
  border: 0,
  fontSize: "100%",

  $nest: {
    "@media only screen and (min-width: 576px)": {
      width: 540
    },
    "@media only screen and (min-width: 768px)": {
      width: 750
    },
    "@media only screen and (min-width: 992px)": {
      width: 970
    },
    "@media only screen and (min-width: 1200px)": {
      width: 1140
    }
  }
})

export const GreySection = style({
  background: colors.grey
})

export const HomeFirstSlider = style({
  background: colors.grey,
  position: "relative",
  cursor: "all-scroll",
  display: "block",
  paddingBottom: 10,
  width: "100%",
  zIndex: 1,
  // overflow: "hidden",

  $nest: {
    '.owl-stage-outer': {
      position: "relative",
      overflow: "hidden",
      "-webkit-transform": "translate3d(0,0,0)",

      $nest: {
        '.owl-stage': {
          display: "block",
          float: "left",

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

        '.owl-item': {
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
          minHeight: 1,
          float: "left",
          position: "relative",
          "-webkit-backface-visibility": "hidden",
          "-webkit-touch-callout": "none",

          $nest: {
            '.item':{
              $nest: {
                img: {
                  display: "block",
                  width: "100%"
                },
                '.inside': {
                  width: "100%",
                  top: "44%",
                  left: "50%",
                  "-ms-transform": "translate(-50%, -50%)",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  textAlign: "center",

                  $nest: {
                    h2: {
                      fontSize: 46,
                      color: colors.white,
                      letterSpacing: "2px",
                      marginBottom: 13,
                      textTransform: "capitalize",
                      fontWeight: 300
                    },
                    p: {
                      color: "#c0dbf4",
                      fontSize: 15,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: 20
                    },
                    ".custom-btn": {
                      fontSize: 14,
                      color: "#2378ec",
                      padding: "14px 33px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
                      borderRadius: 7,
                      backgroundColor: colors.white,
                      display: "inline-block"
                    }
                  }
                }
              }
            }
          }
        }

      }
    },
    ".owl-nav": {
      position: "static",
    
      $nest: {
        ".owl-next, .owl-prev": {
          cursor: "pointer",
          top: "50%",
          fontSize: 0,
          marginTop: "-20px",
          "-ms-transform": "translateY(-50%)",
          transform: "translateY(-50%)",
          position: "absolute"
        },
    
        ".owl-prev": {
          left: 50
        },
    
        ".owl-next": {
          right: 50
        },
    
        img: {
          maxWidth: "100%",
          height: "auto"
        }
      }
    }
  }
})


export const PartnersSlider = style({
  display: "block",

  $nest: {
    "@media screen and (max-width: 480px)": {
      paddingBottom: 20,
      marginBottom: 30,
    },

    "@media screen and (max-width: 768px)": {
      paddingBottom: 40,
      marginBottom: 0,
    },

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
                img: { width: 140 }
              }
            }
          }
        }
      }
    }
  }
})

export const PartnersSection = style({
  textAlign: "center",
  paddingBottom: 47,
  marginBottom: 65,
  borderBottom: "2px solid rgba(219, 234, 248, 0.6)",
  overflow: "hidden",

  $nest: {
    "owl-item": {
      float: "left"
    },

    h5: {
      fontSize: 15,
      marginBottom: 45,
      letterSpacing: 1,
      textTransform: "uppercase"
    }
  }
})

export const WhyUsSection = classes(
  GreySection,
  style({
    display: "flex"
  })
)

export const HostingSoftware = style({
  marginBottom: 113,

  $nest: {
    h2: {
      marginBottom: 71
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

export const WhyChooseInside = style({
  padding: "70px 39px 38px 39px",
  textAlign: "center",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
  borderRadius: 7,
  backgroundColor: colors.white,

  $nest: {
    img: {
      verticalAlign: "middle",
      height: 76,
      marginBottom: 35
    },

    a: {
      color: colors.text,
      fontSize: 18,
      marginBottom: 12,
      letterSpacing: 2,
      fontWeight: 500
    },

    p: {
      color: colors.textLight,
      fontSize: 14,
      lineHeight: "24px",
      marginBottom: 26
    },

    ".read-more": {
      marginBottom: 0,
      color: colors.blue,
      fontSize: 16,
      display: "inline-block",
      position: "relative",
      letterSpacing: "1px",

      $nest: {
        "&::before": {
          content: "",
          width: 0,
          height: 2,
          bottom: "-4px",
          left: "50%",
          opacity: 0,
          marginLeft: "-7px",
          "-ms-transform": "translateX(-50%)",
          transform: "translateX(-50%)",
          position: "absolute",
          backgroundColor: colors.blue,
          display: "inline-block",
          transition: "0.2s linear"
        },

        img: {
          height: "auto",
          marginBottom: 0
        }
      }
    }
  }
})

// ************************ Pricing ************************

export const PricingTable = style({
  padding: "80px 0 30px 0",
  background: "url(assets/images/bg-blue.png) no-repeat center",
  backgroundSize: "cover",
  marginBottom: 130,

  $nest: {
    h2: {
      color: "white",
      marginBottom: "8px"
    },

    p: {
      textAlign: "center",
      marginBottom: 62,
      letterSpacing: 1,
      color: "rgba(205, 220, 236, 0.8)"
    }
  }
})

export const PricingList = style({
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
          marginBottom: 18
        },

        "> span": {
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
          backgroundColor: colors.main
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
          background: "url(../assets/images/check.svg) no-repeat",
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
                  backgroundColor: colors.main,
                  display: "inline-block",
                  padding: "14px 40px 14px 38px",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  fontSize: 15,
                  color: "white"
                }
              }
            }
          }
        }
      }
    }
  }
})

// ************************ Second Slider ************************

export const UserSlider = style({
  marginBottom: 95,
  cursor: "all-scroll",
  position: "relative",
  //overflow: "hidden",

  $nest: {
    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      paddingBottom: 100
    },

    '.owl-stage-outer': {
      position: "relative",
      overflow: "hidden",
      "-webkit-transform": "translate3d(0,0,0)",
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
  backgroundColor: colors.main
})

export const CustomBtnGreen = classes(CustomBtn, style({
  background: "#0479ec linear-gradient(69deg, #37ddcb 0%, #42cbd1 80%, #42cbd1 100%)"
}))
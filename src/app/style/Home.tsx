import { style, media } from "typestyle";
import { colors } from "./vars";

export const Hero = style({
  padding:"60px 0"
},media({maxWidth:991},{padding:"30px 0"}))
export const H1 = style({
  fontSize: 46,
  color: colors.pink, //colors.textLight,
  letterSpacing: "4px",
  textTransform: "uppercase",
  fontWeight: 600,
  margin: 0,
  marginBottom: 25
});
export const Description = style(
  {
    fontSize: 18,
    color: colors.lightGrey,
    lineHeight: 1.75,
    margin: 0,
    paddingBottom: 15,
    letterSpacing: "1px"
  },
  media(
    { maxWidth: 991 },
    {
      fontSize: 14,
      lineHeight: 1.5
    }
  )
);
export const SubscribeBar = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "center"
});
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

    img: {
      backgroundSize: "cover",
      height: "auto",
      width: "100%",
      borderRadius: 7,
      boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.5)"
    },

    "@media screen and (max-width: 768px)": {
      display: "none"
    },

    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      $nest: {
        img: {
          width: "85%",
          display: "block",
          margin: "0 auto"
        }
      }
    }
  }
});

export const WhyUsSection = style({
  background: colors.grey,
  display: "flex"
});

// export const HostingSoftware = style({
//   marginBottom: 113,

//   $nest: {
//     h2: {
//       marginBottom: 71
//     },

//     "@media screen and (max-width: 768px)": {
//       marginBottom: 80,

//       h2: {
//         fontSize: 24,
//         lineHeight: "normal"
//       },

//       "ul li": {
//         width: "50%",
//         float: "left",
//         marginRight: "0 !important",
//         paddingRight: "0 !important",
//         marginBottom: 30,

//         "&:nth-child(2)": {
//           border: "none"
//         }
//       }
//     },

//     "@media screen and (max-width: 991px)": {
//       marginBottom: 80,

//       h2: {
//         lineHeight: "normal"
//       },

//       "ul li": {
//         marginRight: 35,
//         paddingRight: 35
//       }
//     }
//   }
// });

export const TitleHead = style({
  textAlign: "center",
  fontSize: 32,
  color: colors.text,
  marginBottom: 60,
  letterSpacing: 3
});

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
});

export const WhyChoose = style({
  marginBottom: 88,
  overflow: "hidden"
});

// ************************ Pricing ************************

export const RoadMap = style({
  padding: "80px 0",
  background: colors.white, // colors.main, // "url(assets/images/bg-blue.png) no-repeat center",
  // backgroundSize: "cover",
  // marginBottom: 130,

  $nest: {
    ".container:last-of-type": {
      marginTop: 0
    },

    h2: {
      color: colors.pink, //"white",
      marginBottom: "28px"
    },

    p: {
      textAlign: "center",
      marginBottom: 62,
      letterSpacing: 1,
      color: "rgba(205, 220, 236, 0.8)"
    }
  }
});

export const FeatureList = style({
  marginBottom: 45,
  width: "100%",
  clear: "both",
  //display: "inline-block",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  $nest: {
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr"
    },

    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      gridTemplateColumns: "1fr 1fr"
    },

    "@media screen and (min-width: 992px) and (max-width: 1200px)": {
      gridTemplateColumns: "1fr 1fr 1fr"
    },

    ".feature-box": {
      minHeight: "401.5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "33px 29px 33px 35px",
      textAlign: "center",
      boxShadow: "1px 1px 7px rgba(157, 184, 209, 0.27)", //"1px 1px 22px rgba(157, 184, 209, 0.19)",
      borderRadius: 3,
      margin: 10,
      backgroundColor: "white",
      $nest: {
        "@media screen and (min-width: 992px) and (max-width: 1200px)": {
          minHeight: 445
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

        ".line": {
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

        "@media screen and (max-width: 768px)": {
          $nest: {
            p: {
              minHeight: "auto"
            }
          }
        }
      }
    }
  }
});

/* box under roadmap list */
export const RoadMapBox = style({
  padding: "50px 52px 20px 52px",
  boxShadow: `1px 1px 7px rgba(14, 21, 34, 0.07)`, //"1px 1px 30px rgba(14, 21, 34, 0.07)",
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
                "@media screen and (max-width: 768px)": {
                  paddingLeft: 0,

                  $nest: {
                    div: {
                      padding: `14px 0`,
                      width: "100%",
                      textAlign: "center"
                    }
                  }
                },

                div: {
                  width: "auto"
                }
              }
            }
          }
        }
      }
    },
    "@media screen and (max-width: 568px)": {
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
});

// ************************ Recommendations Slider ************************

export const UserSlider = style({
  marginBottom: 95,
  cursor: "all-scroll",
  position: "relative",
  //overflow: "hidden",

  $nest: {
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
    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      paddingBottom: 100
    }
  }
});

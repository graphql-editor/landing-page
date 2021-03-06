import { style } from "typestyle";
import { colors } from "./vars";

export const InfoBlock = style({
  padding: "80px 0",
  marginBottom: 80,
  backgroundColor: colors.grey,

  $nest: {
    p: {
      color: colors.text,
      fontSize: 26,
      textAlign: "center",
      lineHeight: "38px",
      maxWidth: 970,
      margin: "0 auto",
      letterSpacing: "2px"
    }
  }
});

export const TeamBlock = style({
  paddingRight: 15,
  paddingLeft: 15,
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: 140,
  overflow: "hidden",

  $nest: {
    ".row": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end"
    },
    ".col-md-6": {
      //maxWidth: 460,
      marginRight: 23,
    },

    '.images-left img': {
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
    },

    '.images-right img': {
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
    },

    ".images": {
      textAlign: "right",
      paddingRight: 0,

      $nest: {
        img: {
          //width: 400,
          //boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.5)",
          $nest: {
            "@media screen and (min-width: 1460px)": {
              width: "100%"
            }
          }
        }
      }
    },
    h3: {
      color: colors.text,
      fontSize: 32,
      letterSpacing: "3px",
      marginBottom: 18,
      marginTop: 23,

      $nest: {
        "&:last-of-type": {
          color: colors.pink
        }
      }
    },
    p: {
      color: colors.textLight,
      fontSize: 20,
      letterSpacing: "1px"
    },
    ul: {
      marginTop: 42,
      marginBottom: 33,

      $nest: {
        li: {
          marginBottom: 23,

          $nest: {
            h5: {
              color: colors.text,
              fontSize: 18,
              marginBottom: 10,
              letterSpacing: "2px"
            }
          }
        }
      }
    },
    span: {
      $nest: {
        img: { marginRight: 45 }
      }
    },
    "&.reverse": {
      $nest: {
        ".row": {
          justifyContent: "flex-start"
        },
        ".images": {
          textAlign: "left",
          paddingRight: 15,
          paddingLeft: 0,
          boxSizing: "border-box",

          $nest: {
            img: {
              maxWidth: "100%",
            }
          }
        },
        ".col-6": {
          width: 490,
          marginRight: 0,
          marginLeft: 20,
          boxSizing: "border-box"
        },
        h3: {
          fontSize: 31,
          lineHeight: "45px",

          marginTop: 28
        },
        p: {
          marginBottom: 20,
          letterSpacing: "1px"
        }
      }
    },

    "@media screen and (max-width: 768px)":{

      $nest: {
        "&:first-of-type": {
        },

        '.col-md-6': {
          maxWidth: "100%",
          textAlign: 'center',
          margin: "10px auto 30px",
        },

        '.images': {
          paddingRight: 15,
          paddingLeft: 15,
          
          $nest: {
            img: { borderRadius: 7 }
          }
        },

        '&.reverse .row': {
          //background: "blue",

          $nest: {
            '.col-6': {
              order: 1,
              margin: "10px auto 30px"
            },
            '.images-left': {
              order: 2,
              paddingLeft: 15,
              // $nest: {
              //   img: {marginLeft: "auto"}
              // }
            }
          }
        }
      }
    },

    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      $nest: {
        '.col-6': {
          marginRight: 0
        },

        '&.reverse .col-6': {
          marginLeft: 0
        }
      }
    }
  }
});

export const AboutBlock = style({
  marginTop: "-3px",
  padding: "65px 0 40px",
  //paddingTop: 65,
  //backgroundSize: "cover",
  background: colors.main, //"url(../assets/images/bg-team.png) no-repeat",

  $nest: {
    ".hosting-software": {
      marginBottom: 90,

      $nest: {
        ".title-head": {
          marginBottom: 43,
          color: colors.white,
          textAlign: "center",
          fontSize: 32,
          letterSpacing: "3px"
        },
        ul: {
          width: "100%",
          display: "inline-block",
          textAlign: "center",

          $nest: {
            li: {
              width: "28.5%",
              marginRight: 0,
              paddingRight: 0,
              color: colors.white,
              borderColor: "rgba(233, 241, 247, 0.2)",
              fontSize: 50,
              textAlign: "center",
              textTransform: "uppercase",
              display: "inline-block",
              borderRight: "2px solid #e9f1f7",
              marginBottom: 10,
              letterSpacing: "1px",

              $nest: {
                "&:first-child": {
                  textAlign: "left",
                  width: "22%",
                  paddingLeft: 25,
                  borderLeft: 0
                },
                "&:last-child": {
                  textAlign: "right",
                  width: "19%",
                  borderRight: 0
                },
                span: {
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: 16,
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: 27,
                  letterSpacing: "1px"
                }
              }
            }
          }
        }
      }
    }
  }
});

export const ImagesBg = style({
  $nest: {
    img: {
      width: "50%",
      margin: "0 25% 150px"
    }
  }
});

export const OurTeam = style({
  marginBottom: 80,

  $nest: {
    ".title-head": {
      color: colors.white,
      marginBottom: 44,
      textAlign: "center",
      fontSize: 32,
      letterSpacing: "3px"
    },

    ul: {
      width: "100%",
      display: "inline-block",
      marginBottom: 54,

      $nest: {
        li: {
          width: 265, //234,
          float: "left",
          overflow: "hidden",
          marginRight: 16,
          display: "inline-block",

          $nest: {
            "&:last-child": {
              marginRight: 0
            },

            img: {
              width: "100%",
              borderRadius: 6,
              transition: "0.3s linear"
            },

            ".inside": {
              padding: "24px 26px",
              boxShadow: "1px 1px 44px rgba(38, 63, 90, 0.09)",
              borderRadius: 5,
              backgroundColor: colors.white,
              textAlign: "center",

              $nest: {
                ".name": {
                  color: colors.text,
                  fontSize: 18,
                  letterSpacing: "1px",
                  marginBottom: 7
                },
                span: {
                  color: colors.textLight,
                  fontSize: 14
                }
              }
            }
          }
        }
      }
    }
  }
});

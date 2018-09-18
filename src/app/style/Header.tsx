import { style, classes } from "typestyle";
import { colors } from "./vars";

export const Header = style({
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 999999,
  padding: "50px 0",
  position: "absolute",
  marginBottom: 0,
  backgroundColor: "transparent",
  display: "block",
  margin: 0,
  border: 0,
  fontSize: "100%",
  verticalAlign: "baseline",

  $nest: {
    "&::before, &::after ": {
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      boxSizing: "border-box"
    },

    "@media screen and (min-width: 900px) and (max-width:1200px)": {
      padding: "20px 0 0"
    },

    ".container": {
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
    },

    ".logo": {
      $nest: {
        img: {
          maxWidth: 144,
          height: "auto"
        }
      }
    },

    ".row": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }
});

export const HeaderMenu = style({
  textAlign: "right",
  marginRight: 24,
  marginBottom: 0,

  $nest: {
    li: {
      position: "relative",
      display: "inline-block",
      marginRight: 41,
      marginBottom: 0,

      $nest: {
        "@media only screen and (min-width: 1200px) and (max-width: 1330px)": {
          marginRight: 20
        },

        "&::before": {
          content: "",
          position: "absolute",
          bottom: "-12px",
          left: "50%",
          width: 24,
          height: "2px",
          opacity: 0,
          transition: "0.2s linear",
          "-ms-transform": "translateX(-50%)",
          transform: "translateX(-50%)",
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.2)"
        },

        "&.children": {
          $nest: {
            "&::after": {
              content: "",
              width: 130,
              height: 18,
              bottom: "-17px",
              "-ms-transform": "translateX(-50%)",
              transform: "translateX(-50%)",
              left: "50%",
              backgroundColor: "transparent",
              position: "absolute"
            }
          }
        },

        ".sub-menu": {
          top: 40,
          left: "50%",
          "-ms-transform": "translateX(-50%)",
          transform: "translateX(-50%)",
          position: "absolute",
          textAlign: "left",
          width: 195,
          zIndex: 9,
          opacity: 0,
          visibility: "hidden",
          borderRadius: 5,
          boxShadow: "1px 2px 40px rgba(28, 30, 32, 0.14)",
          backgroundColor: colors.white,
          transition: "0.3s linear",

          $nest: {
            "&::before": {
              content: "",
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
              verticalAlign: "middle",

              $nest: {
                "&::before": {
                  display: "none"
                },
                "&:first-child": {
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5
                },
                "&:last-child": {
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5
                },

                a: {
                  color: "rgba(35, 120, 236, 0.9)"
                }
              }
            }
          }
        }
      }
    },
    a: {
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: 16,
      letterSpacing: "1px"
    }
  }
});

export const HeaderButton = style({
  textAlign: "right",
  marginRight: 7,

  $nest: {
    ".custom-btn": {
      width: 113,
      color: colors.white,
      boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.4)",
      borderRadius: 5,
      background: colors.signup,
      letterSpacing: "1px",
      display: "inline-block",
      textAlign: "center",
      padding: "10px 15px",
      textTransform: "none",

      $nest: {
        "&.login": {
          marginRight: 7,
          boxShadow: "1px 1px 22px rgba(14, 21, 34, 0.19)",
          borderRadius: 5,
          background: `${colors.login} none`
        },

        "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
          width: 98
        }
      }
    }
  }
});

export const LoggingHeader = classes(
  Header,
  style({ 
    background: colors.main,
    marginBottom: 115,
  })
);

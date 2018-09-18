import { style, 
  //classes 
} from "typestyle"
import { colors } from "./vars"
//import {LoginContactForm} from './Login'

export const Contact = style({
  background: colors.white,

  $nest: {
    ".bg-form": {
      background: "url(../assets/images/bg-form.jpg) no-repeat",
      backgroundSize: "cover",
      paddingTop: 171,
      paddingBottom: 255,

      $nest: {
        ".container": {
          width: 950,

          $nest: {
            h2: {
              color: colors.white,
              fontSize: 46,
              marginBottom: 16,
              letterSpacing: "2px",
              fontWeight: 300
            },

            p: {
              color: colors.whiteDark,
              fontSize: 15,
              letterSpacing: "2px",
              marginBottom: 22,
              textTransform: "uppercase"
            },

            ".info-block-contact": {
              position: "relative",

              $nest: {
                "&::before": {
                  content: '""',
                  width: "100%",
                  height: "2px",
                  top: "47%",
                  left: 0,
                  backgroundColor: "rgba(222, 230, 235, 0.2)",
                  position: "absolute",
                  display: "block",
                  "-ms-transform": "translateY(-50%)",
                  transform: "translateY(-50%)"
                },

                "&::after": {
                  content: '""',
                  width: 2,
                  height: "100%",
                  top: "16px",
                  left: "50%",
                  backgroundColor: "rgba(222, 230, 235, 0.2)",
                  position: "absolute",
                  display: "block",
                  "-ms-transform": "translateX(-50%)",
                  transform: "translateX(-50%)"
                },

                '.inside': {
                  paddingTop: 50,
                  textAlign: "center",
                  paddingBottom: 56,

                  $nest: {
                    "&.left": {
                      paddingRight: 118
                    },

                    '&.right': {
                      paddingLeft: 65
                    },

                    '.images': {
                      width: 86,
                      height: 86,
                      margin: "0 auto 25px",
                      textAlign: "center",
                      "-ms-flex-align": "center",
                      alignItems: "center",
                      display: "flex",
                      "-ms-flex-pack": "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      backgroundColor: "#307ce4",
                      boxShadow: "1px 1px 44px rgba(0, 0, 0, 0.1)",

                      $nest: {
                        img: {
                          width: 45
                        }
                      }
                    },

                    h4: {
                      color: colors.white,
                      fontSize: 18,
                      letterSpacing: "2px",
                      marginBottom: 15,
                    },

                    span: {
                      lineHeight: "26px"
                    },

                    'a, span': {
                      fontSize: 16,
                      color: colors.white,
                      letterSpacing: "1px"
                    },

                    '.social-icon li': {
                      backgroundColor: colors.white,
                      boxShadow: "4px 7px 26px rgba(0, 0, 0, 0.03)",
                      marginRight: 6,
                      display: "inline-block",
                      width: 45,
                      height: 45,
                      borderRadius: "100%",
                      lineHeight: "46px",
                      textAlign: "center",
                      transition: "0.2s linear",

                      $nest: {
                        i: {
                          color: "rgba(31, 127, 226, 0.8)",
                          fontSize: 18
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})


export const FormContact =  style({
  position: "relative",
  zIndex: 9999,
  width: 541,
  margin: "-200px auto 60px",

  $nest: {
    h3: {
      fontSize: 38,
      color: colors.white,
      textAlign: "center",
      marginBottom: 50,
      letterSpacing: "2px",
      fontWeight: 300
    },

    form: {
      margin: 0,
      background: colors.white,
      boxShadow: "none"
    }
  }
})

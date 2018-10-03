import { style } from "typestyle"
import { colors } from "./vars"

export const Header = style({
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 999999,
  padding: "20px 0",
  //position: "absolute",
  marginBottom: 0,
  backgroundColor: "transparent",
  display: "block",
  margin: 0,
  border: 0,
  fontSize: "100%",
  verticalAlign: "baseline",


  position: "relative",

  $nest: {
    "&::before, &::after ": {
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      boxSizing: "border-box"
    },

    ".logo": {
      maxWidth: 144,
      height: "auto",
      cursor: "pointer"
    },

    ".list ul": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },

    "@media screen and (min-width: 900px) and (max-width:1200px)": {
      padding: "20px 0 10px"
    },
  }
})

export const NavContent = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  $nest: {
    "> li": {
      marginBottom: 0
    },

    ".list > ul": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      $nest: {
        li: {margin: "auto 8px"}
      }
    },

    div: {
      display: "flex",
      flexDirection: "row"
    },

    '.nav-item': {
      margin: "0 10px",
      fontSize: 18,
      listStyle: 'none',
      
      $nest: {
        a: {
          color: colors.textLight,

          $nest: {
            "&:hover": {
              color: colors.pink,
              transition: "0.2s linear color"
            }
          }
        }
      }
    },

    "@media screen and (max-width: 480px)": {
     //flexWrap: "wrap",

      $nest: {
        "> li": {
          marginBottom: 20
        },

        '.list ul': {
          flexWrap: "wrap",
          justifyContent: "center",
          

          $nest: {
            li: {
              marginBottom: 20
            }
          }
        }
      }
    },

    "@media screen and (max-width: 576px)": {
      $nest: {
        'li, img': {
          marginBottom: 30
        },

        '.list ul': {
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          $nest:{ 
            li: {
              marginBottom: 15
            }
          }
        }
      }
    },

    "@media screen and (max-width: 768px)": {
      //flexDirection: "column",

      $nest: {
        div: {
          margin: "0 0 20px"
        }
      }
    },

    "@media screen and (max-width: 991px)": {
      flexDirection: "column !important",
      $nest: {

        '.navbar-brand': {
          margin: '0 auto'
        },

        'li, img': {
          marginBottom: 20
        }
      }
    },
  }
})

export const MobileBlock = style({
  width: "100%",

  $nest: {
    '.navbar-brand': {
      top: 10,
      "-ms-transform": "translate(0)",
      transform: "translate(0)",
      display: "inline-block",
      position: "absolute",
      left: 30
    },

    button: {
      position: "absolute",
      display: "inline-block",
      top: 17,
      right: 30,
      height: 30,
    }
  }
})


export const HeaderButtons = style({
  textAlign: "right",
  marginRight: 7,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  $nest: {
    'iframe,span': {
      marginRight: 15
    },

    ".custom-btn": {
      width: 'auto',
      color: colors.white,
      //boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.4)",
      borderRadius: 5,
      background: colors.pink,
      letterSpacing: "1px",
      display: "inline-block",
      textAlign: "center",
      padding: "10px 14px",
      textTransform: "none",
      cursor: "pointer",

      $nest: {
        "&.login": {
          marginRight: 7,
          //boxShadow: "1px 1px 22px rgba(14, 21, 34, 0.19)",
          borderRadius: 5,
          background: `${colors.login} none`
        },

        "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
          minWidth: 98
        }
      }
    },

    "@media screen and (max-width: 480px)": {
      // flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      flexDirection: "column",

      $nest: {
        'iframe, .custom-btn': {
          marginBottom: 10
        }
      }
    },


    "@media screen and (min-width: 900px) and (max-width:1200px)": {
      $nest: {
        '.custom-btn': {
          minWidth: 91
        }
      }
    },
  }
})
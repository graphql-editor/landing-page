import { style } from "typestyle";
import { colors } from "../../style/vars";

export const GifBackground = style({
  display: "block",
  // padding: `50px 0 120px`,
  margin: "60px auto 120px",
  width: "100%",
  zIndex: 1,
  // background: `url(${require("../../../assets/images/diagram.gif")})`,
  // backgroundSize: "cover",
  //height: 650,

  $nest: {
    ".inside": {
      width: "100%",
      // top: '55%', //'50%', //"44%",
      // left: "50%",
      // "-ms-transform": "translate(-50%, -50%)",
      // transform: "translate(-50%, -50%)",
      // position: "absolute",
      // textAlign: "center",
      //padding: "200px 20px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      $nest: {
        ".text-content": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        },

        b: {
          color: colors.signup
        },

        "h1, h2": {
          fontSize: 46,
          color: colors.signup, //colors.textLight,
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontWeight: 600,

          margin: 0
        },

        p: {
          color: colors.textLight,
          fontSize: 18,
          //textTransform: "uppercase",
          letterSpacing: "1px",
          //marginBottom: 20

          margin: `15px 0 35px`,
          width: "80%"
          //textAlign: "center"
        },

        input: {
          width: 320,
          //border: "none",
          height: 45,
          padding: "0 90px 0 24px",
          lineHeight: "45px",
          boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.15)",
          borderRadius: 7,
          backgroundColor: colors.white,
          color: colors.textLight,
          fontSize: 14,
          marginRight: 15
        },

        img: {
          height: 120,
          display: "block",
          margin: "0 auto 50px",

          $nest: {
            "&:last-of-type": {
              height: "auto",
              width: "100%",
              margin: `0 0 0 auto`
            }
          }
        },

        "@media screen and (max-width: 768px)": {
          width: "100%",
          textAlign: "center",

          $nest: {
            ".text-content": {
              alignItems: "center",

              $nest: {
                "> span": {
                  marginBottom: 40
                }
              }
            },
            input: {
              maxWidth: "90%",
              marginBottom: 15
            }
          }
        },

        "@media screen and (max-width: 991px)": {
          $nest: {
            h2: { fontSize: 18 }
          }
        },

        "@media screen and (max-width: 1195px)": {
          $nest: {
            input: { marginBottom: 20 }
          }
        }
      }
    }
  }
});

// export const GifBackground = style({
//   position: "relative",
//   display: "block",
//   padding: `40px 0`,
//   width: "100%",
//   zIndex: 1,
//   // background: `url(${require("../../../assets/images/diagram.gif")})`,
//   // backgroundSize: "cover",
//   height: 650,

//   $nest: {
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0,
//       // backgroundImage: `linear-gradient(0deg,#192d7288,${colors.main})`,
//       // backgroundSize: "cover",
//       opacity: 0.6
//     },

//     ".item": {
//       $nest: {
//         ".inside": {
//           width: "100%",
//           top: '55%', //'50%', //"44%",
//           left: "50%",
//           "-ms-transform": "translate(-50%, -50%)",
//           transform: "translate(-50%, -50%)",
//           position: "absolute",
//           textAlign: "center",
//           //padding: "200px 20px",

//           $nest: {

//             '.text-content': {
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               justifyContent: "center"
//             },

//             "h1, h2": {
//               fontSize: 46,
//               color: colors.textLight,
//               letterSpacing: "4px",
//               //margin: "23px 0",
//               textTransform: "uppercase",
//               fontWeight: 600,

//               margin: 0
//             },

//             p: {
//               color: colors.whiteDark,
//               fontSize: 18,
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               //marginBottom: 20

//               margin: `30px 0`,
//               width: "80%",
//               //textAlign: "center"
//             },

//             input: {
//               width: 320,
//               //border: "none",
//               height: 45,
//               padding: "0 90px 0 24px",
//               lineHeight: "45px",
//               boxShadow: "1px 1px 22px rgba(98, 129, 157, 0.15)",
//               borderRadius: 7,
//               backgroundColor: colors.white,
//               color: colors.textLight,
//               fontSize: 14,
//               marginRight: 15
//             },

//             img: {
//               height: 120,
//               display: "block",
//               margin: "0 auto 50px",

//               $nest: {
//                 '&:last-of-type': {
//                   height: 300,
//                   margin: `0 0 0 auto`
//                 }
//               }
//             },

//             "@media screen and (max-width: 480px)": {
//               top: "50%"
//             },

//             "@media screen and (max-width: 768px)": {
//               width: "100%",

//               $nest: {
//                 input: {
//                   maxWidth: "90%",
//                   marginBottom: 15
//                 }
//               }
//             },

//             "@media screen and (max-width: 991px)": {
//               $nest: {
//                 h2: { fontSize: 18 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// });

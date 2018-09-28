import { style } from "typestyle";
import { colors } from "../../style/vars";

export const PartnersSection = style({
  textAlign: "center",
  margin: `-75px auto 100px`, //65,
  overflow: "hidden",

  background: "white",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.17)",
  borderRadius: 7,

  $nest: {
    "owl-item": {
      float: "left"
    },

    h5: {
      margin: "20px 0", // "40px 0 20px",
      padding: "0 10px",
      fontSize: 15,
      //marginBottom: 45,
      letterSpacing: 1,
      textTransform: "uppercase",

      color: colors.signup
    },
  }
})

export const PartnersSlider = style({
  display: "block",
  //paddingBottom: 10,
  padding: "10px 0 20px",
  overflow: "hidden",
  //borderBottom: "2px solid rgba(219, 234, 248, 0.6)",

  $nest: {
    ".owl-stage-outer": {
      // position: "relative",
      // overflow: "hidden",
      // "-webkit-transform": "translate3d(0,0,0)",

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
import { style,
  // keyframes
} from "typestyle";
import { colors} from "../../style/vars";

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
    }
  }
});

// const slide = keyframes({
//   '0%': {marginLeft: 0},
//   '100%': {marginLeft: "20%"},
//   //'100%': {marginLeft: "0%"}
// })

export const PartnersSlider = style({
  padding: "10px 0 20px",
  width: "100%",

  $nest: {
    ".content": {
      width: "140%",
      margin: "0 -20%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",

      // animationName: slide,
      // animationDuration: '2s',
      // animationIterationCount: 'infinite',

      $nest: {
        "@media screen and (max-width: 768px) ": {
          width: "220%",
          margin: "0 -60%",
          //background: "red"
        },

        "@media screen and (min-width: 768px) and (max-width: 991px)": {
          width: "160%",
          margin: "0 -40%"
        }
      }
    },

    ".item": {
      transition: "0.5s linear margin-left",

      $nest: {
        img: {
          // width: 140,
          //width: "20%",
          height: 70,
          borderRadius: 6
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
    },
  }
});

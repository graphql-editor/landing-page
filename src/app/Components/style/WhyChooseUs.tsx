import { style } from "typestyle"
import { colors } from "../../style/vars"

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
    },

    "@media screen and (max-width: 991px)": {
      marginBottom: 40
    },

    "@media screen and (min-width: 991px) and (max-width: 1200px)": {
      $nest: {
        "a:first-of-type": {
          margin: "0 -10px 12px"
        }
      }
    }
  }
});
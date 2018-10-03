import { style } from "typestyle"
import { colors } from "../../style/vars"

export const WhyChooseInside = style({
  padding: "38px 39px",
  textAlign: "center",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
  borderRadius: 7,
  backgroundColor: colors.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 390,
  marginBottom: 10,

  $nest: {
    img: {
      verticalAlign: "middle",
      maxHeight: 76,
      minHeight: 76,
      marginBottom: 35,
      // filter: `invert(0) sepia(0) saturate(1) hue-rotate(105deg)`
    },

    h5: {
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

    "@media screen and (max-width: 768px)": {
      minHeight: "auto"
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
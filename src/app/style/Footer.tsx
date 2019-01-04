import { style, media } from "typestyle";
//import { colors } from "./vars";

export const Footer = style({
  paddingTop: 91,
  backgroundColor: "#2a3746" //colors.footerBackground
});

export const Widgets = style(
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 20
  },
  media(
    { maxWidth: 640 },
    {
      gridTemplateColumns: "1fr"
    }
  )
);

export const Copyright = style({
  width: "100%",
  display: "inline-block",
  padding: "31px 0 35px",
  borderTop: "2px solid rgba(255, 255, 255, 0.2)",

  $nest: {
    p: {
      fontSize: 14,
      color: "rgba(185, 203, 239, 0.6)",
      letterSpacing: "1px",
      textAlign: "left",

      "@media screen and (max-width: 576px)": {
        textAlign: "center"
      }
    }
  }
});

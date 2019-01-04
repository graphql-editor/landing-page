import { style } from "typestyle";
import { colors } from "./vars";

export const SubPageTitle = style({
  color: colors.pink,
  textTransform: "uppercase",
  textAlign: "center",
  letterSpacing: 1,
  fontSize: 24,
  marginBottom: 12
});

export const SubPageDescription = style({
  fontSize: 24,
  color: colors.lightGrey,
  fontWeight:700,
  textAlign: "center",
  lineHeight: 2,
  margin: "auto"
});

export const Motto = style({
  padding: `60px 0`
});

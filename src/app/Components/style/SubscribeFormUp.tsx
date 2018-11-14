import { style } from "typestyle";
import { colors } from "../../style/vars";

export const Form = style({
  padding: `40px 0`,
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%"
});
export const Input = style({
  border: "none",
  height: 45,
  flex:1,
  padding: "0 90px 0 24px",
  lineHeight: "45px",
  boxShadow: "1px 1px 3px rgba(98, 129, 157, 0.15)", //"1px 1px 22px rgba(98, 129, 157, 0.15)",
  borderRadius: 7,
  backgroundColor: colors.white,
  color: colors.textLight,
  fontSize: 14,
  marginRight: 10
});

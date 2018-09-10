import { style, classes } from "typestyle";
import * as vars from "./vars";
export const Button = style({
  boxShadow: "1px 1px 22px rgba(14, 21, 34, 0.19)",
  borderRadius: 5,
  background: vars.colors.main,
  fontSize: 15,
  display: "inline-block",
  padding: "10px 15px",
  letterSpacing: 1,
  color: vars.colors.white
});

export const Login = classes(Button, style({}));
export const Signup = classes(Button, style({}));
export const Search = classes(Button, style({}));
export const Pricing = classes(Button, style({}));

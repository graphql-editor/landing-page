import * as React from "react";
import { style } from "typestyle";
import { colors } from "./app/style/vars";

const BetaStyle = style({
  position: "absolute",
  top: 10,
  left: -25,
  width: 100,
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "rotate(-45deg)",
  background: colors.pink,
  color: colors.white
});

export const Beta = () => <div className={BetaStyle}>Beta</div>;

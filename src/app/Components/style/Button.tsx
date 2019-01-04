import {
  style,
  classes
  // keyframes
} from "typestyle";
import { colors } from "../../style/vars";

export const Button = style({
  padding: "14px 15px",
  fontSize: 15,
  color: `${colors.white} !important`,
  //boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
  borderRadius: 7,
  display: "inline-block",
  textTransform: "uppercase",
  backgroundColor: colors.pink, //colors.main,
  cursor: "pointer"
});

export const DoneButton = style({
  background: colors.done
});

export const LoginButton = classes(
  Button,
  style({
    background: `${colors.login} none`
  })
);

export const SignUpButton = classes(
  Button,
  style({
    //background: colors.signup
  })
);

export const BlueButton = classes(
  Button,
  style({
    backgroundColor: colors.main
  })
);

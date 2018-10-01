import { style, classes,
  // keyframes
} from "typestyle";
import { colors} from "../../style/vars";

export const Button = style({
  padding: "14px 15px",
  fontSize: 15,
  color: colors.white,
  //boxShadow: "1px 1px 11px rgba(98, 129, 157, 0.4)",
  borderRadius: 7,
  display: "inline-block",
  textTransform: "uppercase",
  backgroundColor: colors.signup, //colors.main,
  width: "100%",
  cursor: "pointer"
})

export const LoginButton = classes(Button, style({
  background: `${colors.login} none`,
}))

export const SignUpButton = classes(Button, style({
  //background: colors.signup
}))

export const BlueButton = classes(Button, style({
  backgroundColor: colors.main,
}))

import * as React from "react";
import * as styles from "./style/Button";
import * as cx from "classnames";
export const Button: React.StatelessComponent<{
  children: React.ReactNode;
  onClick?: VoidFunction;
  href?: string;
  done?: boolean;
}> = ({ children, onClick, done, href }) => (
  <a
    onClick={onClick}
    className={cx(styles.Button, {
      [styles.DoneButton]: done
    })}
    href={href}
  >
    {children}
  </a>
);

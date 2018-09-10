import * as React from "react";
import * as styles from "./style/Button";
export const Button: React.StatelessComponent<{
  onClick: (e: React.MouseEvent<any>) => void;
}> = ({ children, onClick }) => (
  <a className={styles.Button} onClick={onClick}>
    {children}
  </a>
);

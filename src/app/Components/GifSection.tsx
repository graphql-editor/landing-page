import * as React from "react";
import * as styles from "./style";

export const GifSection: React.StatelessComponent<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <div className={`${styles.GifBackground}`}>
    <div className="item">
      <div className="inside">{children}</div>
    </div>
  </div>
);

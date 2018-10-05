import * as React from "react";
import * as styles from "./style";

export const Headline: React.StatelessComponent<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <div className={`${styles.HeadlineBackground}`}>
    <div className="inside">{children}</div>
  </div>
);

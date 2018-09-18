import * as React from "react";
import * as styles from "../style";

export const FooterWidget: React.StatelessComponent<{
  title: string;
  links: any;
  linksTo: any;
}> = ({ title, links, linksTo }) => (
  <div className={styles.WidgetFooter}>
    <h4>{title}</h4>
    <ul>
      {links.map((el, i) => (
        <li key={i}>
          <a href={linksTo[i]}>{el}</a>
        </li>
      ))}
    </ul>
  </div>
);

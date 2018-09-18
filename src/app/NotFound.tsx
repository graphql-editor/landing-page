import * as React from "react";
import * as styles from "./style";

export const NotFound: React.StatelessComponent<{}> = () => (
  <div className={`wrapper ${styles.ErrorPage}`}>
    <div className={`container inside text-center animatedParent `}>
      <h2 className="animated bounceInLeft">404</h2>
      <h4 className="animated bounceInRight delay-550">
        Something Going Wrong
      </h4>
      <p className="animated bounceInRight delay-550">
        page you are looking for is not found
      </p>
    </div>
  </div>
);

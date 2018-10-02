import * as React from "react";
import * as styles from "./style";
import { withRouter, RouteComponentProps } from "react-router";
import { trustedList } from "../text_data";

class CompaniesUsingSlider extends React.Component<RouteComponentProps<any>,any> {
  render() {
    const doubledList = [...trustedList, ...trustedList]
    return (
      <div className={styles.PartnersSection}>
        <h5>
          THESE COMAPNIES ARE USING GRAPHQL. YOU SHOULD START DOING IT TOO.
        </h5>
        <div
          className={styles.PartnersSlider}
        >
          <div className="content">
            {doubledList.map((el, i) => (
              <div className="item" key={i}>
                <a href={el.address}>
                  <img src={el.imgSrc} alt={el.altImg} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompaniesUsingSlider);

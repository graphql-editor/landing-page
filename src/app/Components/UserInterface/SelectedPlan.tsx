import * as React from "react";

// import * as styles from "../style";
// import { trustedList } from "../text_data";

export const SelectedPlan: React.StatelessComponent<{}> = ({}) => (
  <div
    role="tabpanel"
    className="tab-pane active animated bounceInLeft"
    id="plan"
  >
    <h5>Selected Plan</h5>
    <div className="content">
      <div>
        <img src="assets/images/vpn2.png" alt="vpn" />
      </div>
      <div className="center">
        <h6>VPS Hosting Basic Plan</h6>
        <ul>
          <li>RAM</li>
          <li>Storage SSD</li>
          <li>SAS Storage</li>
          <li>CPU Cores</li>
          <li>Brandwidth</li>
        </ul>
        <span>
          <b>Price</b>Monthly
        </span>
      </div>
      <div className="last">
        <a href="#">Change Plan</a>
        <ul>
          <li>8 GB</li>
          <li>25 GB</li>
          <li>50GB</li>
          <li>2</li>
          <li>2 TB</li>
        </ul>
        <span>80$/Month</span>
      </div>
    </div>
  </div>
);

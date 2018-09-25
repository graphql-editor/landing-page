import * as React from "react";

// import * as styles from "../style";
// import { trustedList } from "../text_data";

export const PaymentsInfo: React.StatelessComponent<{}> = ({}) => (
  <div role="tabpanel" className="tab-pane animated bounceInLeft" id="payments">
    <h5>Payments</h5>
    <div className="content">
      <div>
        <h6>Billing Address</h6>
        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>City</li>
          <li>State</li>
          <li>ZIP</li>
          <li>Country</li>
        </ul>
        <span>
          <b>Payment Method</b>
        </span>
      </div>
      <div className="last">
        <a href="#">Change</a>
        <ul>
          <li>Holly K Douglas</li>
          <li>4124 Wines Lane</li>
          <li>LITTLE ROCK</li>
          <li>Arkansas</li>
          <li>72214</li>
          <li>USA</li>
        </ul>
        <span>PayPal</span>
      </div>
    </div>
    <div className="payment-history">
      <div>
        <h6>Payment History</h6>
        <ul>
          <li>15 Ortober 2017</li>
          <li>12 September 2017</li>
        </ul>
      </div>
      <div className="last">
        <a href="#">Download PDF</a>
        <ul>
          <li>$80</li>
          <li>$80</li>
        </ul>
      </div>
    </div>
  </div>
);

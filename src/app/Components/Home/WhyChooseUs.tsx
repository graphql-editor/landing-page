import * as React from "react";
import { Col } from "reactstrap";
import * as styles from "../../style";

export const WhyChooseUs: React.StatelessComponent<{
  imgSrc: string;
  imgAlt: string;
  address: string;
  title: string;
  description: string;
}> = ({ address, imgSrc, imgAlt, title, description }) => (
  <Col md={4} xs={12}>
    <div className={styles.WhyChooseInside}>
      <img src={imgSrc} alt={imgAlt} />
      <a href={address}>{title}</a>
      <p>{description}</p>
      <a className="read-more" href={address}>
        Learn more <img src="../assets/images/right.png" alt=">" />
      </a>
    </div>
  </Col>
);

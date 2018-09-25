import * as React from "react";
import { Col } from "reactstrap";
import * as styles from "../../style";
import { Link } from "react-router-dom";

export const WhyChooseUs: React.StatelessComponent<{
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}> = ({ imgSrc, imgAlt, title, description }) => (
  <Col lg="4" md="12">
    <div className={styles.WhyChooseInside}>
      <img src={imgSrc} alt={imgAlt} />
      <Link to="/prices">{title}</Link>
      <p>{description}</p>
    </div>
  </Col>
);

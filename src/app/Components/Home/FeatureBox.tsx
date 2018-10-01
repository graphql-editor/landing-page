import * as React from "react";
import { Button } from "../Button";
import * as styles from '../style'

export const FeatureBox: React.StatelessComponent<{
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}> = ({ imgSrc, imgAlt, title, description }) => (
 
  <li className="feature-box animated bounceInLeft delay-250">
    <div className="images">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <h5>{title}</h5>
    <p>{description}</p>
    <Button className={styles.Button}>COMING SOON</Button>
    {/* <a href="https://demo.graphqleditor.com/" className="custom-btn">Try Demo</a> */}
  </li>
  
);
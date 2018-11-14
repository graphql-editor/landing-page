import * as React from "react";
import { Button } from "../Button";
import * as styles from "../style";

export type FeatureType = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  q?: 1 | 2 | 3 | 4;
  year?: 2018 | 2019 | 2020;
  date?: string;
};

export const FeatureBox: React.StatelessComponent<FeatureType> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  date,
  q,
  year
}) => (
  <li className="feature-box animated bounceInLeft delay-250">
    <div className="images">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <h5>{title}</h5>
    <p>{description}</p>
    <Button className={styles.Button}>
      {date || (q && year && `Q${q} - ${year}`) || 'soon'}
    </Button>
  </li>
);

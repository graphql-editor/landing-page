import * as React from "react";
import { recommendationsData } from "../text_data";
import * as styles from "../style";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const RecommendsSlider: React.StatelessComponent<{}> = ({}) => (
  <div className={`${styles.Container} container`}>
    <OwlCarousel
      className={`slider owl-carousel owl-theme ${styles.UserSlider}`}
      loop
      nav={true}
      items={1}
      center={true}
    >
      {recommendationsData.map((el, i) => (
        <div key={i} className="item">
          <div className="inside">
            <img src="../assets/images/icon.svg" className="icon" alt="icon" />
            <img src={el.imgSrc} alt={el.imgAlt} />
            <p>{el.description}</p>
            <div className="user">
              <a href={el.address}>
                <img src={el.personImg} alt="" />
                {el.person}
                <span>{el.position}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  </div>
);

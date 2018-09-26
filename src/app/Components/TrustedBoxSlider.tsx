import * as React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import * as styles from "../style";
import { trustedList } from "../text_data";

export const TrustedBoxSlider: React.StatelessComponent<{}> = ({}) => (
  <OwlCarousel
    className={`${styles.PartnersSlider} owl-carousel owl-theme`}
    loop
    margin={50}
    nav={false}
    dots={false}
    navText={[""]}
    items={5}
    autoplay={true}
    autoplayTimeout={3000}
    responsive={{
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      550: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
    }}
  >
    {trustedList.map((el, i) => (
      <div className="item animated bounceInLeft" key={i}>
        <a href={el.address}>
          <img src={el.imgSrc} alt={el.altImg} />
        </a>
      </div>
    ))}
  </OwlCarousel>
);

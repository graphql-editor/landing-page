import * as React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { slider1Values } from "../../text_data";
import * as styles from "../../style";

export const MainSlider: React.StatelessComponent<{}> = ({}) => (
  <OwlCarousel
    className={`${
      styles.HomeFirstSlider
    } base-slider owl-carousel owl-theme bg-gray`}
    items={1}
    loop={true}
    dots={false}
    nav={true}
    navText={[
      '<img src="../../assets/images/arrow-left.png" alt="<" />',
      `<img src="../../assets/images/arrow-right.png" alt=">" />`
    ]}
  >
    {slider1Values.map((el, i) => (
      <div className="item" key={i}>
        <img src={el.imgSrc} alt={el.imgAlt} />
        <div className="inside">
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <Link to="/service" className="custom-btn">
            Get Started Now
          </Link>
        </div>
      </div>
    ))}
  </OwlCarousel>
);

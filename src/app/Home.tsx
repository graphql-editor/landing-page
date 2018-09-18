import * as React from "react";
import { Row } from "reactstrap";
import * as styles from "./style";
import {
  whyYouShouldData,
  hostingSoft,
  trustedList,
  pricingListData
} from "./text_data";
import {
  TrustedBox,
  PriceBox,
  WhyChooseUs,
  MainSlider,
  RecommendsSlider
} from "./Components";
import SearchDomain from "./SearchDomain";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MainSlider />
        <section className={styles.WhyUsSection}>
          <div className={`${styles.Container} container`}>
            <div className={styles.PartnersSection}>
              <h5>Trusted by 150,000+ happy customers worldwide</h5>
              <OwlCarousel
                className={`${styles.PartnersSlider} owl-carousel owl-theme`}
                loop
                margin={0}
                nav={false}
                items={6}
              >
                {trustedList.map((el, i) => (
                  <TrustedBox
                    key={i}
                    address={el.address}
                    imgSrc={el.imgSrc}
                    altImg={el.altImg}
                  />
                ))}
              </OwlCarousel>
            </div>
            <div className={styles.WhyChoose}>
              <h2 className={styles.TitleHead}>Why you should choose us</h2>
              <Row>
                {whyYouShouldData.map((el, i) => (
                  <WhyChooseUs
                    key={i}
                    imgSrc={el.imgSrc}
                    imgAlt={el.imgAlt}
                    address={el.address}
                    title={el.title}
                    description={el.description}
                  />
                ))}
              </Row>
            </div>
            <div className={styles.HostingSoftware}>
              <h2 className={styles.TitleHead}>Powerful Hosting Software</h2>
              <ul className={styles.Counter} id="counter">
                {hostingSoft.map((el, i) => (
                  <li key={i}>
                    <b className="count" data-count={el.num}>
                      0
                    </b>
                    <span>{el.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.PricingTable}>
          <div className={`${styles.Container} container`}>
            <h2 className={styles.TitleHead}>Linux Reseller Hosting</h2>
            <p>High Performance cPanel WHM Reseller Hosting in Europe</p>
            <ul className={styles.PricingList}>
              {pricingListData.map((el, i) => (
                <PriceBox
                  key={i}
                  imgSrc={el.imgSrc}
                  imgAlt={el.imgAlt}
                  title={el.title}
                  description={el.description}
                  price={el.price}
                  period={el.period}
                />
              ))}
            </ul>
          </div>
          <div className={`${styles.Container} container`}>
            <div className={styles.InfoPricing}>
              <h4>Why you need a HOSTING?</h4>
              <ul>
                <li>
                  <h6>Easy to Customize</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </li>
                <li className="right">
                  <h6>Powerful Security</h6>
                  <p>
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop.
                  </p>
                </li>
              </ul>
              <ul className="right">
                <li>
                  <h6>Market Performance</h6>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </li>
                <li className="button right">
                  <Link to="/login" className="custom-btn">
                    Get Started Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <RecommendsSlider />
        <SearchDomain />
      </div>
    );
  }
}
export default Home;

import * as React from "react";
import * as styles from "./style";
import { monthPlans, yearPlans } from "./text_data";
import { Row, Col } from "reactstrap";
import { RecommendsSlider } from "./Components";
import SearchDomain from "./SearchDomain";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { trustedList } from "./text_data";
import { TrustedBox } from "./Components";

class Service extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.ChoicePlan}>
          <div className="container">
            <h2 className="text-center">Managed VPS Service</h2>
            <ul className="nav nav-tabs" role="tablist">
              <li className="active">
                <a
                  href="#monthly"
                  aria-controls="monthly"
                  role="tab"
                  data-toggle="tab"
                >
                  Billed monthly
                </a>
              </li>
              <li>
                <a
                  href="#yearly"
                  aria-controls="yearly"
                  role="tab"
                  data-toggle="tab"
                >
                  Billed yearly
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="monthly">
                <ul className={styles.ServicePricingList}>
                  {monthPlans.map((el, i) => (
                    <li className="animated bounceInLeft delay-250">
                      <div className="images" key={i}>
                        <img src={el.imgSrc} alt="" />
                      </div>
                      <h5>{el.title}</h5>
                      <ul>
                        {el.list.map((e, ind) => <li key={ind + 100}>{e}</li>)}
                      </ul>
                      <span>
                        <b>Price</b>
                      </span>
                      <div className="price">
                        {el.price}$<span>/month</span>
                      </div>
                      <a href="sign-up.html" className="custom-btn">
                        Get Started Now
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane" id="yearly">
                <ul className={styles.ServicePricingList}>
                  {yearPlans.map((el, i) => (
                    <li className="animated bounceInLeft delay-250">
                      <div className="images" key={i}>
                        <img src={el.imgSrc} alt="" />
                      </div>
                      <h5>{el.title}</h5>
                      <ul>
                        {el.list.map((e, ind) => <li key={ind + 100}>{e}</li>)}
                      </ul>
                      <span>
                        <b>Price</b>
                      </span>
                      <div className="price">
                        {el.price}$<span>/month</span>
                      </div>
                      <a href="sign-up.html" className="custom-btn">
                        Get Started Now
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.InfoPlan}>
            <div className="container">
              <Row>
                <Col md={6}>
                  <img src="assets/images/improving.png" alt="improving" />
                  <h5>Always Improving</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
                <Col md={6}>
                  <img src="assets/images/secured.png" alt="improving" />
                  <h5>100% Secured</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid ${styles.BlockFeatures} animatedParent`}
        >
          <Row>
            <Col md={6} className="col-5">
              <h3 className="animated bounceInUp delay-250">Some Feature</h3>
              <p className="animated bounceInUp delay-250">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <h3 className="animated bounceInUp delay-750">Integrations</h3>
              <p className="animated bounceInUp delay-750">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </Col>

            <Col md={5} className="text-left animated bounceInRight">
              <img src="assets/images/server-block.svg" alt="server-block" />
            </Col>
          </Row>
        </div>
        <div className={`${styles.InfoPlans} animatedParent`}>
          <div className="container">
            <h2 className={`${styles.TitleHead} title-head`}>Compare Plans</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available.
            </p>
            <table className="animated growIn">
              <thead>
                <tr>
                  <td className="text-left">Features</td>
                  <td>Basic</td>
                  <td>Premium</td>
                  <td>Reseller</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left background">RAM</td>
                  <td className="background">8 GB</td>
                  <td className="background">12 GB</td>
                  <td className="background">24 GB</td>
                </tr>
                <tr>
                  <td className="text-left">Storage SSD</td>
                  <td>25 GB</td>
                  <td>55 GB</td>
                  <td>100 GB</td>
                </tr>
                <tr>
                  <td className="text-left background">SAS Storage</td>
                  <td className="background">50 GB</td>
                  <td className="background">132 GB</td>
                  <td className="background">200 GB</td>
                </tr>
                <tr>
                  <td className="text-left">CPU Cores</td>
                  <td>2</td>
                  <td>4</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td className="text-left background">Brandwidth</td>
                  <td className="background">2 TB</td>
                  <td className="background">8 TB</td>
                  <td className="background">12 TB</td>
                </tr>
                <tr className="offset-inside">
                  <td className="text-left">
                    <b>Available OS</b>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="text-left background">Ubuntu</td>
                  <td className="background">
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td className="background">
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td className="background">
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">Windows Server 2008</td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                </tr>
                <tr className="offset-inside">
                  <td className="text-left">
                    <b>Support</b>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="text-left background">Phone Support</td>
                  <td className="background">-</td>
                  <td className="background">
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td className="background">
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">Live Chat</td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                </tr>
                <tr className="offset-inside">
                  <td className="text-left">
                    <b>More Features</b>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="text-left background">Some Feature 1</td>
                  <td className="background">100 Mbps</td>
                  <td className="background">100 Mbps</td>
                  <td className="background">100 Mbps</td>
                </tr>
                <tr>
                  <td className="text-left">Some Feature 2</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <img src="assets/images/done.png" alt="yes" />
                  </td>
                </tr>
                <tr className="offset-inside">
                  <td className="text-left">
                    <b>Price</b>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="text-left background">Monthly</td>
                  <td className="background">80$/Month</td>
                  <td className="background">80$/Month</td>
                  <td className="background">80$/Month</td>
                </tr>
                <tr>
                  <td className="text-left">Yearly</td>
                  <td>50$/Month</td>
                  <td>50$/Month</td>
                  <td>50$/Month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${styles.BottomInfoPlans} animatedParent`}>
          <div className="container">
            <h2 className={`title-head ${styles.TitleHead}`}>
              Ready to Get Started?
            </h2>
            <p>High Performance cPanel WHM Reseller Hosting in Europe</p>
            <div className="text-center">
              <a
                href="#"
                className={`custom-btn green ${styles.CustomBtnGreen}`}
              >
                Choose your plan
              </a>
            </div>
            <OwlCarousel
              className={`${
                styles.PartnersSlider
              } owl-carousel owl-theme partner-slider`}
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
        </div>
        <RecommendsSlider />
        <SearchDomain />
      </React.Fragment>
    );
  }
}

export default Service;

import * as React from "react";
import SearchDomain from "./SearchDomain";
import * as styles from "./style";
import { RecommendsSlider } from "./Components/";
import { Row, Col } from "reactstrap";
import { ourTeam } from "./text_data";

class AboutUs extends React.Component {
  render() {
    //from [e,e,e,e,e] to [[e,e,e,e],[e]]
    const foldm = (r, j) =>
      r.reduce(
        (a, b, i, g) => (!(i % j) ? a.concat([g.slice(i, i + j)]) : a),
        []
      );
    let team = foldm(ourTeam, 4);
    return (
      <React.Fragment>
        <div className={styles.Breadcrumbs}>
          <div className={`${styles.Container} container`}>
            <h1>About Us</h1>
            <p>moving hosting solutions to the next level</p>
          </div>
        </div>
        <div className={styles.InfoBlock}>
          <div className={`${styles.Container} container`}>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.{" "}
            </p>
          </div>
        </div>
        <div className={`${styles.TeamBlock} animatedParent`}>
          <Row>
            <Col md={6} className="animated bounceInRight col-6">
              <h3>Great Team for You</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <ul>
                <li>
                  <h5>Feature One</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </li>
                <li>
                  <h5>Feature Two</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </li>
              </ul>
              <span>
                <img src="./assets/images/php-logo.png" alt="php" />
                <img src="./assets/images/ibm.png" alt="ibm" />
              </span>
            </Col>
            <Col md={6} className="images animated bounceInLeft">
              <img src="./assets/images/image.png" alt="image" />
            </Col>
          </Row>
        </div>
        <div className={`${styles.TeamBlock} reverse animatedParent`}>
          <Row>
            <Col md={6} className="images animated bounceInRight">
              <img src="./assets/images/image.png" alt="image" />
            </Col>
            <Col md={6} className="col-6 animated bounceInLeft">
              <h3>We take care of Upgrades, Maintenance and Security</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <p>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </Col>
          </Row>
        </div>
        <div className={`${styles.ImagesBg} animatedParent`}>
          <img
            className="animated growIn"
            src="./assets/images/image2.jpg"
            alt="image2"
          />
        </div>
        <section className={styles.AboutBlock}>
          <div className={`${styles.Container} container small`}>
            <div className="hosting-software white">
              <h2 className={`${styles.TitleHead} title-head`}>Powerful Hosting Software</h2>
              <ul id="counter">
                <li>
                  <b className="count" data-count="244">
                    0
                  </b>
                  <span>servers</span>
                </li>
                <li>
                  1M+<span>TB total space</span>
                </li>
                <li>
                  <b className="count" data-count="5">
                    0
                  </b>
                  <span>color schemes</span>
                </li>
                <li>
                  <b className="count" data-count="10">
                    0
                  </b>
                  <span>faster</span>
                </li>
              </ul>
            </div>
            <div className={styles.OurTeam}>
              <h2 className={`${styles.TitleHead} title-head`}>Our Team</h2>
              {team.map((el, i) => (
                <ul key={i}>
                  {el.map((e, ind) => (
                    <li className="animated bounceInUp delay-250" key={ind}>
                      <img src={e.imgSrc} alt="team-img" />
                      <div className="inside">
                        <a href="#" className="name">
                          {e.name}
                        </a>
                        <span>{e.position}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
        <div className="user-slider">
          <RecommendsSlider />
        </div>
        <SearchDomain />
      </React.Fragment>
    );
  }
}
export default AboutUs;

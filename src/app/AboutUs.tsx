import * as React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumbs">
          <div className="container">
            <h1>About Us</h1>
            <p>moving hosting solutions to the next level</p>
          </div>
        </div>
        <div className="info-block">
          <div className="container">
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.{" "}
            </p>
          </div>
        </div>
        <div className="team-block animatedParent">
          <div className="row">
            <div className="col-md-6 col-6 animated bounceInRight">
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
                <img src="../assets/assets/images/php-logo.png" alt="php" />
                <img src="../assets/assets/images/ibm.png" alt="ibm" />
              </span>
            </div>
            <div className="col-md-6 images animated bounceInLeft">
              <img src="../assets/assets/images/image.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="team-block reverse animatedParent">
          <div className="row">
            <div className="col-md-6 images animated bounceInRight">
              <img src="../assets/assets/images/image.png" alt="image" />
            </div>
            <div className="col-md-6 col-6 animated bounceInLeft">
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
            </div>
          </div>
        </div>
        <div className="images-bg animatedParent">
          <img
            className="animated growIn"
            src="../assets/assets/images/image2.jpg"
            alt="image2"
          />
        </div>
        <section className="about-block">
          <div className="container small">
            <div className="hosting-software white">
              <h2 className="title-head">Powerful Hosting Software</h2>
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
            <div className="our-team animatedParent">
              <h2 className="title-head">Our Team</h2>
              <ul>
                <li className="animated bounceInUp delay-250">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      John Packet
                    </a>
                    <span>CEO</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-550">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Mike Schillig
                    </a>
                    <span>Head Developer</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-750">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Lizy Dabars
                    </a>
                    <span>Manager</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-1000">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Ann Lecar
                    </a>
                    <span>CEO</span>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="animated bounceInUp delay-1000">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      John Packet
                    </a>
                    <span>CEO</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-1250">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Mike Schillig
                    </a>
                    <span>Head Developer</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-1500">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Lizy Dabars
                    </a>
                    <span>Manager</span>
                  </div>
                </li>
                <li className="animated bounceInUp delay-1750">
                  <img
                    src="../assets/assets/images/team-img.png"
                    alt="team-img"
                  />
                  <div className="inside">
                    <a href="#" className="name">
                      Ann Lecar
                    </a>
                    <span>CEO</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="user-slider">
          <div className="container">
            <div className="slider owl-carousel owl-theme">
              <div className="item">
                <div className="inside">
                  <img
                    src="../assets/assets/images/icon.svg"
                    className="icon"
                    alt="icon"
                  />
                  <img
                    src="../assets/assets/images/brand.png"
                    alt="logo-tesla"
                  />
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="user">
                    <a href="#">
                      <img src="../assets/assets/images/user.png" alt="user" />
                      Oliver Mitchell
                      <span>Manager at Lorem Ipsum</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="inside">
                  <img
                    src="../assets/assets/images/icon.svg"
                    className="icon"
                    alt="icon"
                  />
                  <img
                    src="../assets/assets/images/brand.png"
                    alt="logo-tesla"
                  />
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="user">
                    <a href="#">
                      <img src="../assets/assets/images/user.png" alt="user" />
                      Oliver Mitchell
                      <span>Manager at Lorem Ipsum</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pre-footer">
          <img
            src="../assets/assets/images/line-prefoter.svg"
            alt="bg-prefooter"
          />
        </div>
        <div className="search-domain animatedParent">
          <div className="container animated fadeInUpShort">
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <h3>Search Your Domain</h3>
              </div>
              <div className="col-md-8 col-xs-12">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Domain Name" />
                    <select>
                      <option value=".com">.com</option>
                      <option value=".ua">.ua</option>
                      <option value=".nu">.nu</option>
                    </select>
                  </div>
                  <button className="custom-btn green">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutUs;

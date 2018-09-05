import * as React from "react";
class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="base-slider owl-carousel owl-theme">
          <div className="item">
            <img src="../assets/assets/images/slider-light.svg" alt="slider" />
            <div className="inside">
              <h2>Best Web Hosting For Your Website</h2>
              <p>get best speed for your website. dont loose more clients.</p>
              <a href="service-page.html" className="custom-btn">
                Get Started Now
              </a>
            </div>
          </div>
          <div className="item">
            <img src="../assets/assets/images/slider-light.svg" alt="slider" />
            <div className="inside">
              <h2>Best Web Hosting For Your Website</h2>
              <p>get best speed for your website. dont loose more clients.</p>
              <a href="service-page.html" className="custom-btn">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
        <div className="partner animatedParent">
          <div className="container">
            <h5>Trusted by 150,000+ happy customers worldwide</h5>
            <div className="partner-slider owl-carousel owl-theme">
              <div className="item animated bounceInLeft delay-250">
                <a href="#">
                  <img src="../assets/assets/images/brand.png" alt="partner" />
                </a>
              </div>
              <div className="item animated bounceInLeft delay-500">
                <a href="#">
                  <img src="../assets/assets/images/brand.png" alt="partner" />
                </a>
              </div>
              <div className="item animated bounceInLeft delay-750">
                <a href="#">
                  <img src="../assets/assets/images/brand.png" alt="partner" />
                </a>
              </div>
              <div className="item animated bounceInLeft delay-1000">
                <a href="#">
                  <img src="../assets/assets/images/brand.png" alt="partner" />
                </a>
              </div>
              <div className="item animated bounceInLeft delay-1250">
                <a href="#">
                  <img src="../assets/assets/images/brand.png" alt="partner" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gray animatedParent">
          <div className="container">
            <div className="why-choose">
              <h2 className="title-head">Why you should choose us</h2>
              <div className="row">
                <div className="col-md-4 col-xs-12 animated bounceInUp delay-250">
                  <div className="inside">
                    <img
                      src="../assets/assets/images/optimised.svg"
                      alt="optimised"
                    />
                    <a href="#">Totaly Optimised</a>
                    <p>
                      Our wordpress theme is totaly optimised for you needs.
                      Very fast and responsive website convert your traffic to
                      new customers.
                    </p>
                    <a href="#" className="read-more">
                      Learn More{" "}
                      <img
                        src="../assets/assets/images/right.png"
                        alt="right"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 animated bounceInUp delay-500">
                  <div className="inside center">
                    <img
                      src="../assets/assets/images/powerfull.svg"
                      alt="powerfull"
                    />
                    <a href="#">Powerful Features</a>
                    <p>
                      Our theme get everything you need to work with your
                      hosting website. Its fresh, brandly new and with awesome
                      customizing features.{" "}
                    </p>
                    <a href="#" className="read-more">
                      Learn More{" "}
                      <img
                        src="../assets/assets/images/right.png"
                        alt="right"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 animated bounceInUp delay-750">
                  <div className="inside">
                    <img
                      src="../assets/assets/images/website.svg"
                      alt="website"
                    />
                    <a href="#">Worldwide Support</a>
                    <p>
                      We will do suppor to your theme almost 24/7. If you get
                      some bugs or have some problems - just simply write to us.{" "}
                    </p>
                    <a href="#" className="read-more">
                      Learn More{" "}
                      <img
                        src="../assets/assets/images/right.png"
                        alt="right"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hosting-software">
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
          </div>
        </section>
        <div className="pricing-table animatedParent">
          <div className="container">
            <h2 className="title-head">Linux Reseller Hosting</h2>
            <p>High Performance cPanel WHM Reseller Hosting in Europe</p>
            <ul className="pricing-list">
              <li className="animated bounceInLeft delay-250">
                <div className="images">
                  <img src="../assets/assets/images/server.svg" alt="server" />
                </div>
                <h5>Dedicated Server</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <span>
                  <b>From</b>
                </span>
                <div className="price">
                  80$<span>/month</span>
                </div>
                <a href="service-page.html" className="custom-btn">
                  Get Started Now
                </a>
              </li>
              <li className="animated bounceInLeft delay-500">
                <div className="images">
                  <img
                    src="../assets/assets/images/hosting.svg"
                    alt="hosting"
                  />
                </div>
                <h5>Reseller Hosting</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <span>
                  <b>From</b>
                </span>
                <div className="price">
                  160$<span>/month</span>
                </div>
                <a href="service-page.html" className="custom-btn">
                  Get Started Now
                </a>
              </li>
              <li className="animated bounceInLeft delay-750">
                <div className="images">
                  <img
                    src="../assets/assets/images/hosting2.svg"
                    alt="hosting2"
                  />
                </div>
                <h5>Shared Hosting</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <span>
                  <b>From</b>
                </span>
                <div className="price">
                  9$<span>/month</span>
                </div>
                <a href="service-page.html" className="custom-btn">
                  Get Started Now
                </a>
              </li>
              <li className="animated bounceInLeft delay-1000">
                <div className="images">
                  <img src="../assets/assets/images/vps.svg" alt="vpn" />
                </div>
                <h5>VPS Hosting</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <span>
                  <b>From</b>
                </span>
                <div className="price">
                  82$<span>/month</span>
                </div>
                <a href="service-page.html" className="custom-btn">
                  Get Started Now
                </a>
              </li>
            </ul>
            <div className="security animated bounceInRight delay-250">
              <img
                src="../assets/assets/images/security-light.svg"
                alt="security-light"
              />
              <div className="text">
                <h4>Security Guaranted</h4>
                <p>
                  Our wordpress theme is totaly optimised for you needs. Very
                  fast and responsive website<br />convert your traffic to new
                  customers.
                </p>
              </div>
            </div>
          </div>
          <div className="container animatedParent">
            <div className="info-pricing animated growIn">
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
                  <a href="service-page.html" className="custom-btn">
                    Get Started Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                    <div className="user">
                      <a href="#">
                        <img
                          src="../assets/assets/images/user.png"
                          alt="user"
                        />
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
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                    <div className="user">
                      <a href="#">
                        <img
                          src="../assets/assets/images/user.png"
                          alt="user"
                        />
                        Oliver Mitchell
                        <span>Manager at Lorem Ipsum</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-domain animatedParent" />
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
                      {[".com",".ua",".nu"].map((e,i) => 
                        <option key={i} value={e}>{e}</option>
                      )}
                    </select>
                  </div>
                  <button className="custom-btn">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style";
import { Col, Row } from "reactstrap";

class Header extends React.Component<any, any> {
  render() {
    const {
      props: {
        location: { pathname }
      }
    } = this.props;
    return (
      <header
        className={`transparent ${
          pathname == "/login" || pathname == "/sign-up"
            ? styles.LoggingHeader
            : styles.Header
        }`}
      >
        <div className="container">
          <Row>
            <Col md={2}>
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo.svg" alt="logo" />
                </Link>
              </div>
            </Col>
            <Col md={7}>
              <ul className={styles.HeaderMenu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li className="children">
                  <Link to="/service">Hosting</Link>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-page.html">Service page 1</a>
                    </li>
                    <li>
                      <a href="service-page-light.html">Service page 2</a>
                    </li>
                    <li>
                      <a href="service-page-dark.html">Service page 3</a>
                    </li>
                    <li>
                      <a href="service-page-images.html">Service page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="children">
                  <a href="user-interface.html">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="order.html">Order</a>
                    </li>
                    <li>
                      <a href="user-interface.html">User Interface</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog-list.html">Blog</a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <div className={styles.HeaderButton}>
                <Link to="/login" className="custom-btn login">
                  Login
                </Link>
                <Link to="/sign-up" className="custom-btn">
                  Sign Up
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        {/* -------------------- MOBILE -------------------- */}
        <div className="mobile-block" style={{ display: "none" }}>
          <div className="logo-mobile">
            <a href="index.html">
              <img src="./assets/images/logo.svg" alt="logo" />
            </a>
          </div>
          <a href="#" className="mobile-menu-btn">
            <span />
          </a>
          <div className="mobile-menu">
            <div className="inside">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo.svg" alt="logo" />
                </a>
              </div>
              <ul
                className="menu panel-group"
                id="accordion"
                aria-multiselectable="true"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="children panel">
                  <a
                    href="#menu1"
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    aria-expanded="false"
                    aria-controls="menu1"
                  >
                    Hosting
                  </a>
                  <ul className="sub-menu panel-collapse collapse" id="menu1">
                    <li>
                      <a href="service-page.html">Service page 1</a>
                    </li>
                    <li>
                      <a href="service-page-light.html">Service page 2</a>
                    </li>
                    <li>
                      <a href="service-page-dark.html">Service page 3</a>
                    </li>
                    <li>
                      <a href="service-page-images.html">Service page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="children panel">
                  <a
                    href="#menu2"
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    aria-expanded="false"
                    aria-controls="menu2"
                  >
                    Pages
                  </a>
                  <ul className="sub-menu panel-collapse collapse" id="menu2">
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="order.html">Order</a>
                    </li>
                    <li>
                      <a href="user-interface.html">User Interface</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog-list.html">Blog</a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <div className="button-header">
                <Link to="/login" className="custom-btn login">
                  Login
                </Link>
                <Link to="/sign-up" className="custom-btn">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

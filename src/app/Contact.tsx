import * as React from "react";
import SearchDomain from "./SearchDomain";
import * as styles from "./style";
import { Row, Col } from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.Contact}>
          <div className="bg-form">
            <div className={`${styles.Container} container`}>
              <h2 className="text-center">Contact Us</h2>
              <p className="text-center">We’re here to help.</p>
              <div className="info-block-contact animatedParent">
                <Row>
                  <Col md={6} sm={6} xs={12} className="animated bounceInLeft">
                    <div className="inside left">
                      <div className="images">
                        <img src="../assets/images/phone.png" alt="phone" />
                      </div>
                      <h4>Have questions? Call Us.</h4>
                      <a href="#">+1 888 231 1211</a>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12} className="animated bounceInLeft">
                    <div className="inside right">
                      <div className="images">
                        <img src="../assets/images/mail.svg" alt="mail" />
                      </div>
                      <h4>Email Us</h4>
                      <a href="#">hello@enginehosting.com</a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={6} xs={12} className="animated bounceInLeft">
                  <div className="inside left">
                      <div className="images">
                        {" "}
                        <img
                          src="../assets/images/address.svg"
                          alt="address"
                        />{" "}
                      </div>
                      <h4>Address</h4>
                      <span>
                        514 S. Magnolia St.<br />Orlando, FL 32806
                      </span>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12} className="animated bounceInLeft">
                  <div className="inside right">
                        <div className="images">
                          <img src="../assets/images/like.svg" alt="like" />
                        </div>
                        <h4>Follow Us</h4>
                        <ul className="social-icon">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className={styles.FormContact}>
            <h3>Send Message</h3>
            <form className={styles.LoginContactForm}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>
                  {" "}
                  Message:
                  <textarea id="message" name="Message" />
                </label>
              </div>
              <div className="form-group text-right">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
        <SearchDomain />
      </React.Fragment>
    );
  }
}
export default Contact;

import * as React from "react";
// import { Link } from "react-router-dom";
class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-form">
          <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <p className="text-center">We’re here to help.</p>
            <div className="info-block-contact animatedParent">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 animated bounceInLeft">
                  <div className="inside left">
                    <div className="images">
                      <img src="assets/images/phone.png" alt="phone" />
                    </div>
                    <h4>Have questions? Call Us.</h4>
                    <a href="#">+1 888 231 1211</a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 animated bounceInRight">
                  <div className="inside right">
                    <div className="images">
                      <img src="assets/images/mail.svg" alt="mail" />
                    </div>
                    <h4>Email Us</h4>
                    <a href="#">hello@enginehosting.com</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 animated bounceInLeft">
                  <div className="inside left">
                    <div className="images">
                      {" "}
                      <img src="assets/images/address.svg" alt="address" />{" "}
                    </div>
                    <h4>Address</h4>
                    <span>
                      514 S. Magnolia St.<br />Orlando, FL 32806
                    </span>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 animated bounceInRight">
                    <div className="inside right">
                      <div className="images">
                        <img src="assets/images/like.svg" alt="like" />
                      </div>
                      <h4>Follow Us</h4>
                      <ul className="social-icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-contact animatedParent">
          <h3>Send Message</h3>
          <form className="animated growIn">
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
        <div className="pre-footer">
          <img src="assets/images/line-prefoter.svg" alt="bg-prefooter" />
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;

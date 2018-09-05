import * as React from "react";
// import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div className="container">
        <div className="widget-footer">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="service-page.html">Web Hosting</a>
            </li>
            <li>
              <a href="service-page.html">Shared Hosting</a>
            </li>
            <li>
              <a href="service-page.html">Dedicated Server</a>
            </li>
            <li>
              <a href="service-page.html">Private Cloud</a>
            </li>
          </ul>
        </div>
        <div className="widget-footer">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="service-page.html">Careers</a>
            </li>
            <li>
              <a href="blog-list.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="widget-footer">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="service-page.html">FAQ</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="widget-footer">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="#">+123-333-123</a>
            </li>
            <li>
              <a href="#">support@enginehosting.com</a>
            </li>
          </ul>
        </div>
        <div className="widget-footer last">
          <a href="index.html">
            <img src="assets/images/logo.svg" alt="logo" />
          </a>
          <p>There are many variations of passages of Lorem Ipsum </p>
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
        <div className="copyright">
          <p>&copy; Copyright 2017 Hosting, All Rights Reserved</p>
        </div>
      </div>
    </footer>
    );
  }
}
export default Footer;

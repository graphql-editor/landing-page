import * as React from "react";
import * as styles from "./style";
import { FooterWidget } from "./Components";
import { footerData } from "./text_data";
import { Link } from "react-router-dom";
class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className={styles.Footer}>
        <div className="container">
          {footerData.map((el, i) => (
            <FooterWidget
              key={i}
              title={el.title}
              links={el.links}
              linksTo={el.linksTo}
            />
          ))}
          <div className={styles.WidgetFooterLast}>
            <a href="/">
              <img src="assets/images/logo.svg" alt="logo" />
            </a>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <ul className="social-icon">
              <li>
                <Link to="facebook.com"><i className={`fab fa-facebook-f`} /></Link>
              </li>
              <li>
                <Link to="instagram.com"><i className={`fab fa-instagram`} /></Link>
              </li>
              <li>
                <Link to="youtube.com"><i className={`fab fa-youtube`} /></Link>
              </li>
            </ul>
          </div>
          <div className={styles.Copyright}>
            <p>&copy; Copyright 2017 Hosting, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

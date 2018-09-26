import * as React from "react";
import * as styles from "./style";
import { FooterWidget } from "./Components";
import { footerData } from "./text_data";
import { Container } from "reactstrap";
import { withRouter, RouteComponentProps } from 'react-router';

class Footer extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <footer className={styles.Footer}>
        <Container>
          {footerData.map((el, i) => (
            <FooterWidget
              key={i}
              title={el.title}
              links={el.links}
              linksTo={el.linksTo}
            />
          ))}
          <div className={styles.FooterWidgetLast}>
            <a href="/">
              <img src={require("../assets/images/logo_medium.png")} alt="GRAPHQL EDITOR" />
            </a>
            <p>Be a part of the backend revolution!</p>
            {/* <ul className="social-icon">
              <li>
                <a href="https://github.com/slothking-online/grqphql-editor">
                  <i className={`fab fa-facebook-f`} />
                </a>
              </li>
              <li>
                <a href="https://github.com/slothking-online/grqphql-editor">
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul> */}
          </div>
          <div className={styles.Copyright}>
            <p>&copy; Copyright 2018 AEXOL/Slothking</p>
          </div>
        </Container>
      </footer>
    );
  }
}
export default withRouter(Footer);

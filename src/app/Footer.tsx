import * as React from "react";
import * as styles from "./style";
import { FooterWidget } from "./Components";
import { footerData } from "./text_data";
import { Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
type FooterState = {
  blog?: {
    title: string;
    url: string;
    date_published: string;
  }[];
};
class Footer extends React.Component<RouteComponentProps<any>, FooterState> {
  state: FooterState = {};
  componentDidMount() {
    fetch("https://blog.graphqleditor.com/feed.json")
      .then(r => {
        return r.json();
      })
      .then(r => {
        this.setState({
          blog: r.items.slice(0, 5)
        });
      });
  }
  render() {
    return (
      <footer className={styles.Footer}>
        <Container>
          <div className={styles.Widgets}>
            {footerData.map((el, i) => (
              <FooterWidget
                key={i}
                title={el.title}
                links={el.links}
                linksTo={el.linksTo}
              />
            ))}
            {this.state.blog && (
              <FooterWidget
                title={"From the blog"}
                links={this.state.blog.map(b => b.title)}
                linksTo={this.state.blog.map(b => b.url)}
              />
            )}
          </div>
          <div className={styles.Copyright}>
            <p>&copy; Copyright 2018 AEXOL/Slothking/Graphqleditor.com</p>
          </div>
        </Container>
      </footer>
    );
  }
}
export default withRouter(Footer);

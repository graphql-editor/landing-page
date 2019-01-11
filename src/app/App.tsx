import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { NotFound } from "./NotFound";
import Prices from "./Prices";
import { withRouter, RouteComponentProps } from "react-router";
import { Consulting } from "./Consulting";
import { Seo } from "../Seo";
import { Beta } from "../Beta";
import { Analytics } from "../analytics";
class AppContainer extends React.Component<RouteComponentProps<any>, any> {
  componentDidMount() {
    Analytics.init();
  }
  componentDidUpdate(prevProps: RouteComponentProps<any>) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      Analytics.page(this.props.location.pathname);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Beta />
        <Seo
          title={`GraphQL Visual Editor - Create backends from GraphQL schema`}
          description={`GraphQL Editor lets you create backends and mocks out of graphql schemas. It is a GraphQL vs Rest war winner!`}
          url={"https://graphqleditor.com"}
          image={require(`../assets/images/graphql-header.jpg`)}
          absouluteImage={`http://graphqleditor.com/${require(`../assets/images/graphql-header.jpg`)}`}
        />
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Prices} exact path="/prices" />
          <Route component={Consulting} path="/services" />
          <Route component={NotFound} exact path="*" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(AppContainer);

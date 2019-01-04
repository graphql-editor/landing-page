import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { YMInitializer } from "react-yandex-metrika";

// import SignUp from "./SignUp";
// import Login from "./Login";
// import About from "./About";
// import UserInteface from "./UserInteface";
import { NotFound } from "./NotFound";
import Prices from './Prices';
import { withRouter, RouteComponentProps } from "react-router";
import { Consulting } from "./Consulting";

class AppContainer extends React.Component<RouteComponentProps<any>, any> {
  render() {
    let yandexId = 50699473;
    let yandexOptions: {} = {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    };
    if (process.env.NODE_ENV === "development") {
      (yandexId = 123456789), (yandexOptions = {});
    }
    return (
      <div className="wrapper">
        <YMInitializer
          version="2"
          accounts={[yandexId]}
          options={yandexOptions}
        />
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Prices} exact path="/prices" />
          {/* <Route component={Login} exact path="/login" />
          <Route component={SignUp} exact path="/sign-up" /> 
          <Route component={About} exact path="/about" /> 
          <Route component={UserInteface} exact path ="/user" /> */}
            <Route component={Consulting} path="/services" />
          <Route component={NotFound} exact path="*" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(AppContainer);

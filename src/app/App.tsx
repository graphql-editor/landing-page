import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import About from "./About";
// import UserInteface from "./UserInteface";
import { NotFound } from "./NotFound";
// import Prices from './Prices';
import { withRouter, RouteComponentProps } from 'react-router';

class AppContainer extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          {/* <Route component={Prices} exact path="/prices" /> */}
          {/* <Route component={Login} exact path="/login" />
          <Route component={SignUp} exact path="/sign-up" /> 
          <Route component={About} exact path="/about" /> 
          <Route component={UserInteface} exact path ="/user" /> */}
          <Route component={NotFound} exact path="*" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(AppContainer);

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from "./Login"
import Header from './Header';
import Footer from './Footer';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { NotFound } from './NotFound';

class AppContainer extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Contact} exact path="/contact" />
          <Route component={Login} exact path="/login" />
          <Route component={SignUp} exact path="/sign-up" />
          <Route component={AboutUs} exact path="/about-us" />
          <Route component={NotFound} exact path="*" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default AppContainer;

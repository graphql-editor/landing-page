import * as React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

class Root extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
        <div id="routing">
          <Switch>
            <Route component={App} path="/" />
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Root;

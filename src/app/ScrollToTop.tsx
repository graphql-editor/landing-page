import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

class ScrollToTop extends React.Component<RouteComponentProps<any>,any> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
import * as ReactGA from 'react-ga';

export class Analytics {
  static init = () => {
    ReactGA.initialize('UA-127595045-2', {
      debug: process.env.NODE_ENV === 'development'
    });
  };
  static page = (path: string) => ReactGA.pageview(path);
}

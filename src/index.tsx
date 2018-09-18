/* eslint-disable import/default */
import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./app/Root";
import { Provider } from "unstated";
import "./vars.css";
import "./assets/js/lib/jquery.js";
import "./assets/js/lib/bootstrap.min.js";
import "./assets/js/lib/owl.carousel.min.js";
import "./assets/js/lib/css3-animate-it.js";
import "./assets/js/lib/counter.js";
import "./assets/js/main.js";
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/lib/animations.min.css"

const renderFunc = (Component: React.ComponentType<any>) =>
  render(
    <Provider>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );

renderFunc(Root);

if (module.hot) {
  module.hot.accept("./app/Root", () => {
    const NewRoot = require("./app/Root").default;
    renderFunc(NewRoot);
  });
}

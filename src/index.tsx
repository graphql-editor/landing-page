/* eslint-disable import/default */
import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./app/Root";
import "./vars.css"
import "./assets/assets/js/lib/jquery.js";
import "./assets/assets/js/lib/bootstrap.min.js"
import "./assets/assets/js/lib/owl.carousel.min.js"
import "./assets/assets/js/lib/css3-animate-it.js"
import "./assets/assets/js/lib/counter.js"
import "./assets/assets/js/main.js";
// import "./assets/assets/css/style.css"


const renderFunc = (Component: React.ComponentType<any>) =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

renderFunc(Root);

if (module.hot) {
  module.hot.accept("./app/Root", () => {
    const NewRoot = require("./app/Root").default;
    renderFunc(NewRoot);
  });
}

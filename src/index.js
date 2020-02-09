import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import createStore from "./stores/index";

import Layout from "./Layout";

const basename = process.env.NODE_ENV === "production" ? PACKAGE_NAME : "/";

const store = createStore();

render(
  <Provider store={store}>
    <Router basename={basename}>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("app")
);

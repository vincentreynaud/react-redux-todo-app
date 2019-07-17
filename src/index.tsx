// React
import * as React from "react";
import { render } from "react-dom";

// Redux
import { createStore } from "redux"
import { Provider } from "react-redux"
import appReducer from "./reducers/index"

// Components
import Router from "./components/Router";

// Styles
import '@fortawesome/fontawesome-free/css/all.css';
import "./scss/style.scss";

const store = createStore(appReducer);

render(
  <Provider store={store} >
    <Router />
  </Provider>,
  document.querySelector("#main")
);
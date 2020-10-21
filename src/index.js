import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import App from "./components/App";
import "./styles.css";

const store = storeFactory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

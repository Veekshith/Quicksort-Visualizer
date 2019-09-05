import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import App from "../app/App";
const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>
  </Provider>
);
export default Root;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import App from "./component/TODO/App";
import Details from "./component/Profile/details";
import User from "./component/Login/Login";
import Register from "./component/Register/Register";
import store from "./store";
import PrivateRoute from "./privaterouter";

const Index = () => {
  <Details />;
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={User} />
          <PrivateRoute exact path='/status' component={App} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

store.subscribe(() => store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

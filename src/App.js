import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import status from "./component/TODO/App";
import Details from "./component/Profile/details";
import User from "./component/Login/Login";
import Register from "./component/Register/Register";
import store from "./store";
import PrivateRoute from "./privaterouter";

const App= () => {
  <Details />;
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={User} />
          <PrivateRoute exact path='/status' component={status} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;

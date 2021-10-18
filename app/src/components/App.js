import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// API
// const apiUrl = process.env.API_URL;

function App() {

  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} position="top-left" />
    </Fragment>
  );
}

export default App;

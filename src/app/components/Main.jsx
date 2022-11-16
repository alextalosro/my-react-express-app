import React from "react";
import { Provider } from 'react-redux';
import { store } from '../store';
import Dashboard from "./Dashboard";
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import Navigation from "./Navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route
          exact
          path="/dashboard"
          render={() => (<Dashboard />)}
        />
      </div>
    </Provider>
  </Router>
)
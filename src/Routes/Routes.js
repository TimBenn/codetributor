import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../containers/Home/Home';

import './Routes.css'

const Router = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Router;

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
// import Cookies from "js-cookie";

import Home from "./welcome"
import Survey from "./survey"
import ThankYou from "./thank-you-page"



export default class App extends Component {

  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="page-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/survey" component={Survey} />
              <Route path="/thank-you" component={ThankYou} />           
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

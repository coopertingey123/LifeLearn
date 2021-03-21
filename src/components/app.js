import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
// import Cookies from "js-cookie";

// import Home from "./welcome"
import InputPage from "./input-page"
import ThankYou from "./thanks"



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
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/input" component={InputPage} />
              <Route path="/thanks" component={ThankYou} />           
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

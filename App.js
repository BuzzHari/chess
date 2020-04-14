import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Demo from "./Demo";
import Login from "./Login";
// import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="ui container">
            <Route exact path="/" component={Login} />
            <Route path="/Game" component={Demo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

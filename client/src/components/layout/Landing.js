import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <div style = {{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b> Chess </b> - a {" "}
              <span style={{ fontFamily: "monospace"}}> Game</span> 
            </h4>
            <p className="flow-text grey-text text-darken-1 ">
              Play against one of the smartest chess engine of all time - <b>Stockfish</b>
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                  Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

export default  Landing;
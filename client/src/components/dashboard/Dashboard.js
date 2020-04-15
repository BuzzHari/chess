import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Chessboard from "chessboardjsx";
import StockFish from "./integrations/Stockfish"

class Dashboard extends Component {
  onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
  };

  render(){
    const { user } = this.props.auth;
    
    return(
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
          <div className = "col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Please wait for your demise as
                <span style={{ fontFamily: "monoSpace"}}> Stockfish </span>
                gets ready.
              </p>
            </h4>
            <div style={boardsContainer}>
              <StockFish>
                {({ position, onDrop }) => (
                  <Chessboard 
                    id="stockfish"
                    position={position}
                    width={320}
                    onDrop={onDrop}
                    boardStyle={boardStyle}
                    orientation="white"
                  />
                )}
              </StockFish>
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className = "btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout 
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
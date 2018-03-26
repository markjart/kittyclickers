//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Kitty Clickers</li>
          <li className="itemCenter">{this.props.msg}</li>
          <li className="itemRight">Score: {this.props.score} / Top: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Kitty Clickers</li>
          <li className="itemCenter">A Cute & Cuddly MEOWmory Game</li>
          <li className="itemRight">&nbsp;&nbsp;Score: {this.props.score}&nbsp;&nbsp;</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import React, { Component } from "react";

import styles from "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <Logo />
          <nav className="Navigation">
            <ul>
              {this.props.isLoggedIn ? (
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              ) : (
                <li>
                  <Link to="/">Log In</Link>
                  <Link to="/">Sign Up</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

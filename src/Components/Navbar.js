import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header className="container">
          <div className="wrapper">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/page-1">Page 1</Link>
                </li>
                <li>
                  <Link to="/page-2">Page 2</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;

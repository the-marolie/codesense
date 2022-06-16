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
        <header class="container">
          <div class="wrapper">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
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

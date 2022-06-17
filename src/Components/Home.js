import React, { Component } from "react";
import axios from "axios";
import Navbar from "@C/Navbar";
import ListUsers from "@C/ListUsers";
import ListPosts from "@C/ListPosts";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      userId: "",
      user: "",
      email: "Enter email",
    };
  }

  handleSelect = (id) => {
    this.setState({ userId: id });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUncontrolled = (e) => {
    alert(this.username.value);
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <div className="component-container">
          <ListUsers onUserSelect={this.handleSelect} />
          <ListPosts userId={this.state.userId} />
          <div className="inner-wrapper">
            <div className="input-container">
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput}
                name="user"
              />
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleInput}
                name="email"
              />
            </div>
            <div className="display-wrapper">
              <p>Name: {this.state.user}</p>
              <p>Email: {this.state.email}</p>
            </div>
            <div className="uncontrolled-input">
              <input
                type="text"
                name="username"
                placeholder="Uncontrolled"
                ref={(input) => (this.username = input)}
              />
              <button onClick={this.handleUncontrolled}>Submit</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

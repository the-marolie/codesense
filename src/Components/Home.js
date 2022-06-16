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
    };
  }

  handleSelect = (id) => {
    this.setState({ userId: id });
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <div class="component-container">
          <ListUsers onUserSelect={this.handleSelect} />
          <ListPosts userId={this.state.userId} />
        </div>
      </>
    );
  }
}

export default Home;

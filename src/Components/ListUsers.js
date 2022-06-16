import React, { Component } from "react";
import axios from "axios";
import Navbar from "@C/Navbar";
import { Link } from "react-router-dom";


class ListPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ list: res.data });
    });
  }

  handleClick = (id) => {
    this.props.onUserSelect(id);
  }

  render() {
    const list = this.state.list;
    return (
      <>
        {this.props.match?.params.id && <Navbar />}
        <div class="list-box-container">
          <div class="wrapper">
            <ul>
              {list.map((item, i) => (
                <li key={i}>
                  <button onClick={() => this.handleClick(item.id)}>{item.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListPosts;

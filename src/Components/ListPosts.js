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

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchPosts(this.props.userID);
    }
  }

  fetchPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`
      )
      .then((res) => {
        this.setState({ list: res.data });
      });
  };

  render() {
    const list = this.state.list;
    if (!this.props.userId) {
      return (
        <div className="list-box-container">
          <div className="wrapper">
            <p>Select a user to load the posts</p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="list-box-container">
            <div className="wrapper">
              <ul>
                {list.map((item, i) => (
                  <li key={i}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.body > 20
                        ? `${item.body.substring(0, 20)}...`
                        : item.body}
                    </p>
                    <Link to={`/post/${item.id}`}>Read more</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ListPosts;

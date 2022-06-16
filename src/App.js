import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import ListUsers from "@C/ListUsers";
import ListPosts from "@C/ListPosts";
import Home from "@C/Home";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/:id" component={ListPosts} />
                <Route exact path="/users/:name" component={ListUsers} />
            </Router>
        );
    }
}

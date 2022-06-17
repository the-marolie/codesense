import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import ListUsers from "@C/ListUsers";
import ListPosts from "@C/ListPosts";
import Home from "@C/Home";
import SomePage from "@C/PageOne";
import PageTwo from "@C/PageTwo";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/page-1" component={SomePage} />
                <Route exact path="/page-2" component={PageTwo} />
            </Router>
        );
    }
}

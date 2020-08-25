import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import { EmptyLayout } from "./layouts";
import Dashboard from "./views/Dashboard";
import Company from "./views/Company";
import Login from "./views/Login";
import Register from "./views/Register";

export default () => {

    return (
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <Switch>
                <Route path="/" key="1" exact>
                    <Dashboard />
                </Route>
                <Route path="/dashboard" key="2">
                    <Dashboard />
                </Route>
                <Route path="/company" key="3">
                    <Company />
                </Route>
                <Route path="/login" key="98">
                    <Login />
                </Route>
                <Route path="/register" key="99">
                    <EmptyLayout>
                        <Register />
                    </EmptyLayout>
                </Route>
            </Switch>
        </Router>
    )
};
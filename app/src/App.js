import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EmptyLayout from "./layouts/Empty";
//import Dashboard from "./views/Dashboard";
//import Company from "./views/Company";
//import Login from "./views/Login";
import Register from "./views/Register";

export default () => {

    return (
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <Switch>
                <Route path="/" key="1" exact>
                    <EmptyLayout>
                        <Register />
                    </EmptyLayout>
                </Route>
                <Route path="/dashboard" key="2">
                    <Register />
                </Route>
                <Route path="/register" key="99">
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
};
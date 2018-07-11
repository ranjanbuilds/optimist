import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Goals from './Goals';
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/goals" component={Goals} />
        </Switch>
    </BrowserRouter>
);

export default Router;
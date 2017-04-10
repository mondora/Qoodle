import React from "react";
import {Router, IndexRoute, Route} from "react-router";
import history from "libs/history";
import RootPage from "views/root-page.jsx";
import NewQoodle from "views/master-page/new-qoodle.jsx";
import ListPage from "views/master-page/list-page.jsx";
import PageNotFound from "views/page-not-found.jsx";

export default (
    <Router history={history} >
        <Route component={RootPage} path="/" name="root">
            <IndexRoute component={NewQoodle} name="new" />
            <Route component={ListPage} name="list" path="/list"/>
        </Route>

        <Route component={PageNotFound} path="*" name="PageNotFound"/>
    </Router>
);

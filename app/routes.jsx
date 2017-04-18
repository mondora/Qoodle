import React from "react";
import {Router, IndexRoute, Route} from "react-router";
import history from "libs/history";
import RootPage from "views/root-page.jsx";
import NewQoodle from "views/master-page/new-qoodle.jsx";
import ListPage from "views/master-page/list-page.jsx";
import QoodleView from "views/master-page/qoodle-view";

export default (
    <Router history={history} >
        <Route component={RootPage} path="/" name="root">
            <IndexRoute component={ListPage} name="list" />
            <Route component={NewQoodle} name="new" path="/create"/>
            <Route component={QoodleView} name="qoodle" path="/qoodle"/>
        </Route>


    </Router>
);

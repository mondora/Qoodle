import React from "react";
import {Router, IndexRoute, Route} from "react-router";
import history from "components/libs/history";
import RootPage from "views/root-page.jsx";
import NewQoodle from "views/master-page/new-qoodle.jsx";
import QoodleView from "views/master-page/qoodle-view.jsx";
import ListPage from "views/master-page/list-page.jsx";


export default (
    <Router history={history} >
        <Route component={RootPage} path="/" name="root">
            <Route component={NewQoodle} name="new" path="/create"/>
            <Route component={QoodleView} name="view" path="/view/:id"/>
            <Route component={ListPage} name="list" path="/list"/>
        </Route>


    </Router>
);

import React from "react";
import {Router, Route} from "react-router";
import history from "./components/libs/history";
import RootPage from "./views/root-page.jsx";
import NewQoodle from "./views/master-page/new-qoodle.jsx";
import QoodleView from "./views/master-page/qoodle-view.jsx";
import ListPage from "./views/master-page/list-page.jsx";
import QoodleDetails from './views/master-page/qoodle-details';


export default (
    <Router history={history} >
        <Route component={RootPage} path="" name="root">
            <Route component={ListPage} name="lists" path="/"/>
            <Route component={NewQoodle} name="new" path="/create"/>
            <Route component={QoodleView} name="view" path="/qoodle/:id"/>
            <Route component={ListPage} name="list" path="/qoodles"/>
            <Route component={QoodleDetails} name="details" path="/details"/>
        </Route>


    </Router>
);

import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CreateTable from "components/create-table";
import SideBar from "components/side-bar";
import MainContent from "components/main-content";
/////////////List Actions


class RichiestePage extends Component {

    render() {
        return (

            <div>
                <div className="row">
                <SideBar/>
                <MainContent/>
                </div>
    </div>
        );
    }
}

export default RichiestePage;



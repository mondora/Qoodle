import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CreateTable from "components/create-table";
import QCBasicInfo from "components/QCBasicInfo";

class MainContent extends Component {


    render() {

        return (
            <div>
        <div className="col-md-10 text-center" id="main-content">
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active text-left" id="formBuilderContent">

                <QCBasicInfo />
                <CreateTable />

            </div>
            </div>
        </div>
            </div>);
    }
}

export default connect(null, null) (MainContent);

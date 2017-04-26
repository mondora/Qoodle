import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CreateTable from "components/create-table";

class MainContent extends Component {


    render() {

        return (
            <div>
        <div className="col-md-9 text-center" id="main-content">
            <div className="tab-content">
                <div className="blockChoice">
                    <div className="cardContainer">
                        <input type="text" placeholder="Title" className="inputChoice"/>
                    </div>
                    <div className="labelChoice divTooltip" data-title="campo obbligatorio!">
                        <i className="ti-alert" aria-hidden="true"
                           style={{fontSize: 10, marginLeft: 2, marginRight: 16, color: 'rgb(79, 116, 142)'}}>
                        </i>
                        <div>Title Qoodle</div>
                    </div>
                </div>

                <div className="blockChoice">
                    <div className="cardContainer">
                        <textarea placeholder="Description" className="inputChoice"></textarea>
                    </div>
                    <div className="labelChoice divTooltip" data-title="campo obbligatorio!">
                        <i className="ti-alert" aria-hidden="true"
                           style={{fontSize: 10, marginLeft: 2, marginRight: 16, color: 'rgb(79, 116, 142)'}}>
                        </i>
                        <div>Description</div>
                    </div>
                </div>

                <CreateTable />

            </div>
        </div>
            </div>);
    }
}

export default connect(null, null) (MainContent);
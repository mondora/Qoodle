import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CreateTable from "components/create-table"
/////////////List Actions


class RichiestePage extends Component {

    render() {
        return (
            <div style={{margin: "20px"}}>
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
        );
    }
}

export default RichiestePage;



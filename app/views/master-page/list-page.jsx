 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Elenco from "./mock.jsx";

/////////////List Actions


class ListPage extends Component {

    render() {
        return (
            <div>
            <Elenco/>
            <div>LIST</div>
            </div>
                );
    }
}

export default ListPage;



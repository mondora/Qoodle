import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "components/header"
/* LIST COMPONENTS */

class MasterPage extends Component {

    static propTypes = {
        children: PropTypes.node
    };
    renderMainPage() {
        const {children} = this.props;
        return (
            <div>
                <div>
                    <Header />
                    {children}
                </div>
            </div>
        );
    }

    renderLoadigInfo() {

        return (
            <div></div>
        );
    }

    render() {
        return (this.renderMainPage());
    }
}


export default connect(null, null)(MasterPage);

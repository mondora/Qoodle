import React, { Component } from "react";
import PropTypes from 'prop-types';
import MasterPage from "./master-page.jsx";

class RootPage extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    renderNotAuthPage() {
        return (
            <div>{"Not authorized"}</div>
        );
    }

    renderAppPage() {
        const {children} = this.props;

        return (
            <MasterPage>
                {children}
            </MasterPage>
        );
    }

    render() {
        return this.renderAppPage();

    }
}

export default RootPage;

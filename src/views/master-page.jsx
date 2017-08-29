import React, {Component, PropTypes} from "react";

import Header from "../components/header"
/* LIST COMPONENTS */

export default class MasterPage extends Component {

    static propTypes = {
        children: PropTypes.node
    };
    renderMainPage() {
        const {children} = this.props;
        {this.goToListPage();}
        return (
            <div>
                <div>
                    <Header />
                    {children}
                </div>
            </div>
        );
    }

    goToListPage()
    {
      window.location="#/qoodles";
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

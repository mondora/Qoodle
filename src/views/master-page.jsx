import React, {Component, PropTypes} from "react";

import Header from "../components/header"
import ListPage from "../views/master-page/list-page"
/* LIST COMPONENTS */

export default class MasterPage extends Component {

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
                <ListPage></ListPage>
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

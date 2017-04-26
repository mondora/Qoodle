import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class SideBar extends Component {





    render(){

    return (<div>

        <div className="col-md-3" id="sideBar">
            <div className="tab-container text-center">

                <ul className="neo-nav clearfix" role="tablist">
                    <li role="presentation">
                        <a href="#fieldSettingTab" id="fieldSettingTab_lnk" aria-controls="profile" role="tab" data-toggle="tab">
                            Field Settings
                        </a>
                    </li>
                </ul>

                <div className="tab-content" id="sidebar-tab-content" style={{height: '86vh'}}>
                    <div role="tabpanel" className="tab-pane active" id="titleField">
                        <p>
                            COLUMN TITLE
                        </p>

                        <div className="collapse in" id="stdTitleField" aria-expanded="true">
                            <input type="text"/>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    </div>



    );
    }
}

export default connect(null, null) (SideBar);

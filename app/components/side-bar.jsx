import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SideField from "./side-field";

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


                    <SideField tipo="text" nome='title'/>
                    <SideField tipo="number" nome="min"/>
                    <SideField tipo="number" nome="Max"/>



                </div>





            </div>
        </div>
    </div>



    );
    }
}

export default connect(null, null) (SideBar);

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


                    <div role="tabpanel" className="tab-pane active" id="uniMisura">
                        <p>
                            SET UNITA' DI MISURA
                        </p>

                        <div className="collapse in" id="stdUniMisuraField" aria-expanded="true">
                            <select className="sceltaMisura" ><option value="kg">kilogrammi</option> <option value="metro">metro</option> <option value="bottle">bottle</option> </select>

                        </div>

                    </div>

                    <div role="tabpanel" className="tab-pane active" id="invio">

                        <div className="collapse in"  id="stdAdd" aria-expanded="true">
                            <button className="btnAdd" type="submit">Aggiungi alla tabella</button>

                        </div>
                        <br/><br/>

                        <div className="collapse in" id="stdDelete" aria-expanded="true">
                            <button className="btnDelete" type="sumbit">Rimuovi ultima colonna</button>
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

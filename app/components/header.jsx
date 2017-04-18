import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Header extends Component {
    constructor () {
        super();
        this.state = {
            isOpenMenu: false
        };
    }

    toggleMenu(){
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }
    
    render(){
        return(
            <div className={"header"}>
                <div className="floatLeft">
                    <i className="hamburger fa fa-bars" onClick={this.toggleMenu.bind(this)} aria-hidden="true" />
                    <div className={this.state.isOpenMenu ? "containerMenu" : "containerMenu hidden"} >
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}} onClick="location.href='#/create'">ADD NEW QOODLE</div>
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}}>LIST QOODLE</div>
                    </div>
                    <img src="_assets/img/logo.png" style={{verticalAlign: 'middle', width: 100}} />
                </div>
                <div className="floatRight">
                    <div className="btn littleOne"><span className="ti-power-off"></span></div>
                </div>
            </div>
        );
    }
}

export default connect(null, null) (Header);

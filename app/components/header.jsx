import React, {Component, PropTypes} from "react";

export default class Header extends Component {
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
                    <i className="hamburger fa fa-bars" aria-hidden="true" />
                    <div className={this.state.isOpenMenu ? "containerMenu" : "containerMenu hidden"} >
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}} >ADD NEW QOODLE</div>
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

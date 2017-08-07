import React, {Component, PropTypes} from "react";
import Menu from "components/Menu";

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
                    <i onClick={this.toggleMenu.bind(this)} className="hamburger fa fa-bars" aria-hidden="true" />
                    <div className={this.state.isOpenMenu ? "containerMenu" : "containerMenu hidden"} >
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}} >ADD NEW QOODLE</div>
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}}>LIST QOODLE</div>
                        <div style={{padding: 10, borderBottom: '1px solid #ccE3E1'}}>TAKES PART IN THE QOODLE</div>
                    </div>
                    <img src="_assets/img/logo.png" style={{verticalAlign: 'middle', width: 100}} />
                </div>
                <div className="floatRight">
                    <div className="btn littleOne"><span className="ti-power-off"></span></div>
                </div>
                <Menu isOpenMenu={this.state.isOpenMenu}/>
            </div>
        );
    }
}

import React, {Component} from "react";
import Menu from "./Menu";
import logoQoodle from '../assets/img/logo.png'
import '../assets/css/styles.css'
import '../assets/css/style.css'
import '../assets/css/themify-icons.css'


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
                    <img src={logoQoodle} alt="loading" style={{verticalAlign: 'middle', width: 100}} />
                </div>
                <div className="floatRight">
                    <div className="btn littleOne"><span className="ti-power-off"></span></div>
                </div>
                <Menu isOpenMenu={this.state.isOpenMenu} toggleMenu={this.toggleMenu.bind(this)}/>
            </div>
        );
    }
}

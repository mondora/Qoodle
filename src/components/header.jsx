import React, {Component} from "react";
import {Button, Image} from 'react-bootstrap';
import Menu from "./Menu";
import logoQoodle from '../assets/img/logo.png'
import '../assets/css/styles.css'
import '../assets/css/style.css'
import '../assets/css/themify-icons.css'


export default class Header extends Component {
    constructor () {
        super();
        this.state = {
            isOpenMenu: false,
            show: false,
        };
    }

    onSignOut()
    {
      const auth2 = window.gapi.auth2.getAuthInstance();


      auth2.signOut().then((res) => {
        if ( typeof res != "undefined" && res.ok) {
          alert("disconnesso correttamente");
        }  
      })
      .then(function() {
        this.props.update("invalid", "invalid", "invalid", this.props.link);
      }.bind(this));

    }


    toggleMenu(){
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }







    render(){
      var bottone;

      if(sessionStorage.getItem("email") !== "invalid")
      {  bottone =
        (
          <div>
            <span id="pad">
              <span id="name"> {this.props.name}  </span>
              <Image src={this.props.pictureUrl} width={"48px"} height={"48px"} rounded />
            </span>
          <Button className="logoutButton" bsStyle="primary" bsSize="large" onClick={this.onSignOut.bind(this)}><span id="logoutText">Logout</span> <i className="fa fa-sign-out"></i></Button>
          </div>
        )
      }




        return(
            <div className={"header"}>
                <div className="floatLeft">
                    <i onClick={this.toggleMenu.bind(this)} className="hamburger fa fa-bars" aria-hidden="true" />
                    <img src={logoQoodle} alt="loading" style={{verticalAlign: 'middle', width: 100}} />
                </div>

                <div className="floatRight">
                  {bottone}
                </div>


                <Menu isOpenMenu={this.state.isOpenMenu} toggleMenu={this.toggleMenu.bind(this)}/>


              </div>

        );
    }
}

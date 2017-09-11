import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Button, Modal, Image} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import Menu from "./Menu";
import InfoModal from "./InfoModal";
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

    onSignOut(googleUser)
    {
      const auth2 = window.gapi.auth2.getAuthInstance();

      auth2.signOut().then( (res) => {
        console.log("disconnesso correttamente");
      })
      .then(function(data) {
        this.props.aggiorna("invalid", "invalid", "invalid");
      }.bind(this));



      this.setState({show: !this.state.show});


      window.location = "#/"

    }


    toggleMenu(){
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    showModal(){
      this.setState({show: !this.state.show});
    }





    render(){
      var bottone;

      if(sessionStorage.getItem("email") != "invalid")
      {  bottone =
        (
          <div>
            <span id="pad">
              <span id="name"> {this.props.name}  </span>
              <Image src={this.props.pictureUrl} width={"10%"} height={"10%"} rounded />
            </span>
          <Button bsStyle="primary" bsSize="large" onClick={this.onSignOut.bind(this)}>Logout</Button>
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


                  <InfoModal
                    show={this.state.show}
                    title="Logout"
                    info={"Disconnesso correttamente"} //aggiungere nome
                    showInfoModal={this.showModal.bind(this)}/>

              </div>

        );
    }
}

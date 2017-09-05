import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
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
            user: {}
        };
    }

    onSignIn(googleUser, id_client) {

    var id_token = googleUser.getAuthResponse().id_token;

        var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/token';
        var myInit = {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify({
            id_token: id_token,
            id_client: "368137741089-hsrpuqdglviv781adke5kjva4ik9aum8.apps.googleusercontent.com"
          })
        };


        fetch(url, myInit)
        .then( function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw new Error('Ooops...something went wrong.');
          }
        })
        .then(function(data) {
             this.setState({ user: data });
        }
        .bind(this))
        .catch((error) => { console.error(error); });
    }


    onSignOut(googleUser)
    {
      const auth2 = window.gapi.auth2.getAuthInstance();

      auth2.signOut().then( (res) => {
        console.log("disconnesso correttamente");
      })
      .then(function(data) {
                   this.setState({ user: {} });
      }.bind(this));



      this.setState({show: !this.state.show});

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
      const responseGoogle = (response) => {
        console.log("this is response", response);
        this.onSignIn(response);
      }


      var bottone;

      if (Object.keys(this.state.user).length === 0 && this.state.user.constructor === Object)
        bottone = <GoogleLogin
        clientId="368137741089-hsrpuqdglviv781adke5kjva4ik9aum8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />;
      else {
        bottone = <Button bsStyle="primary" bsSize="large" onClick={this.onSignOut.bind(this)}>Logout: {this.state.user.name}</Button>
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



                  <Modal show={this.state.show}>
                      <Modal.Header>
                          <Modal.Title>{"Logout"}</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <h3>Disconnesso correttamente {this.state.user.name}</h3>
                      </Modal.Body>

                      <Modal.Footer>
                          <Button onClick={this.showModal.bind(this)}>{"Ok"}</Button>
                      </Modal.Footer>
                  </Modal>










              </div>

        );
    }
}

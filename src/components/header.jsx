import React, {Component} from "react";
import ReactDOM from 'react-dom';
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
            idUser: ""
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
          if(!response.ok)
          throw new Error("Network response was not ok")
        });


/*
      Axios.post("http://localhost:4567/token/", {
        idToken: "abc"
      });

     var id_token = googleUser.getAuthResponse().id_token;


      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://localhost:4567/token/');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
      };
      xhr.send('idtoken=' + "abc");*/

    }



    toggleMenu(){
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    render(){

      const responseGoogle = (response) => {
        console.log("this is response", response);
        this.onSignIn(response);
      }

        return(
            <div className={"header"}>
                <div className="floatLeft">
                    <i onClick={this.toggleMenu.bind(this)} className="hamburger fa fa-bars" aria-hidden="true" />
                    <img src={logoQoodle} alt="loading" style={{verticalAlign: 'middle', width: 100}} />
                </div>
                <div className="floatRight">
                    <div className="btn littleOne"><span className="ti-power-off"></span></div>
                </div>

                <GoogleLogin
                  clientId="368137741089-hsrpuqdglviv781adke5kjva4ik9aum8.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  />

                <Menu isOpenMenu={this.state.isOpenMenu} toggleMenu={this.toggleMenu.bind(this)}/>
            </div>
        );
    }
}

import React, {Component} from "react";
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import InfoModal from '../../components/InfoModal';
import GoogleLogin from 'react-google-login';

export default class Login extends Component {

  constructor(props)
  {
    super(props);

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
           if (typeof(Storage) !== "undefined")
           {
            this.props.aggiorna(data.name, data.email, data.pictureUrl);
          }
      }
      .bind(this))
      .catch((error) => { console.error(error); });




  }




  render()
  {
    const responseGoogle = (response) => {
      console.log("this is response", response);
      this.onSignIn(response);
    }


    var bottone;

    if ( this.props.email === "invalid" )
      bottone = (
        <center><h3>Per poter accedere al sito devi essere Loggato</h3>
        <GoogleLogin
        clientId="368137741089-hsrpuqdglviv781adke5kjva4ik9aum8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        /></center>);
    else {

      bottone =
      (
        <div>
              Sloggati
        </div>
    )
    }


    return (<div>

        {bottone}
      </div>)
  }

}

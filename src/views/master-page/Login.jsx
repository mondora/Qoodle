import React, {Component} from "react";
import GoogleLogin from 'react-google-login';
import logoQoodle from '../../assets/img/logo.png'

export default class Login extends Component {

  constructor(props)
  {
    super(props);

  }




  onSignIn(googleUser, id_client) {

    var id_token = googleUser.getAuthResponse().id_token;
    var id_client = "368137741089-hsrpuqdglviv781adke5kjva4ik9aum8.apps.googleusercontent.com"


      var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/token';
      var myInit = {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({
          id_token: id_token,
          id_client: id_client
        })
      };

      fetch(url, myInit)
      .then( function(response) {
        if (response.status >= 200 && response.status < 300 && response !== "Invalid ID token.") {
          return response.json();
        } else {
          throw new Error('Ooops...something went wrong.');
        }
      })
      .then(function(data) {
           this.setState({ user: data });
           if (typeof(Storage) !== "undefined")
           {//qui aggiorno sesssionstorage (se la risposta è stata positiva e il token è valido)
            this.props.aggiorna(data.name, data.email, data.pictureUrl, this.props.link);
            sessionStorage.setItem("Idtoken", id_token);
            sessionStorage.setItem("IdClient", id_client);
            sessionStorage.setItem("email", data.email);
            sessionStorage.setItem("name", data.name);
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
        <center><h3 id="initialInfo">Accedi per creare, vedere, o partecipare a un Qoodle!</h3>
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


    return (
      <div id="initial">
        <img id="initialLogo" src={logoQoodle} alt="loading" style={{verticalAlign: 'middle', width: 200}} />
        {bottone}
      </div>)
  }

}

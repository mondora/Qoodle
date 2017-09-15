import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export default class QoodleDetails extends Component {



  constructor(){
    super();

    this.state =
    {
      nome : "",//nome qoodle che mi hanno passato
      email: "",
      realName: "",
      elements: []
    }
  }




  componentDidMount()
  {

    var token;
    var client;
    var email = "exampleMail";
    var realNameLogged = "exampleName";


    if (typeof(Storage) !== "undefined")
    {
      token = sessionStorage.getItem("Idtoken");
      client = sessionStorage.getItem("IdClient");
      email = sessionStorage.getItem("email");
      realNameLogged = localStorage.getItem("name");
    }

        var id;
        if (typeof window !== 'undefined')
          id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/details/' + id;
        var myInit = {
              method: 'get',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'id_token': token,
                'id_client': client,
                'email': email
              },
            };



        fetch(url, myInit)
        .then( function(response) {
          if(response.ok)
          return response.json();
          throw new Error("Network response was not ok")
        })
        .then(function(data)
            { this.setState({
              nome: data.nome,
              elements: data.elements,
              email: email,
              realName: realNameLogged
              });
        }
        .bind(this))
        .catch((error) => { console.error(error); });;

  }




  renderPeople(whos)
  {
    var detailsList= "questo qoodle non ha elementi";
    var sommaTot=0;


     detailsList =  whos.map( (who) => <div className="detail" key={who.name}>- {who.realName}  ne ha scelti: { who.count } </div>);



    return (  detailsList  );
  }


  renderElement()
  {
    var detailsList;

    if(this.state.elements.length > 0)
      detailsList = (this.state.elements.map( (ele) => <div id="detailsElement" key={ele.what}> <div className="elements"> l'elemento ( {ele.what} ) è stato scelto scelto complessivamente:  { ele.whos.reduce( (pv, cv) => pv + cv.count , 0)}  volte</div> <div>{this.renderPeople(ele.whos)}</div>  </div> ));


    return (
    <div>
      {detailsList}
    </div>);
  }

  render()
  {
    return(
        <div className="body">
          {this.renderElement()}
        </div>
    )
  }


}

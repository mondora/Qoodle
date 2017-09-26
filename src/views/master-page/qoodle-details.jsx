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
    var detailsList= [];


    whos.map( (who) =>
        detailsList.push( {
              who:  who.realName,
              how:  who.count
          }
        )
      );



    return (  detailsList  );
  }


  renderElement()
  {
  /*  var detailsList;
    console.log(this.state.elements);

    if(this.state.elements.length > 0)
      detailsList = (this.state.elements.map( (ele) =>
      JSON.stringify({
        "what": ele.what,
        "howPurchase": ele.whos.reduce( (pv, cv) => pv + cv.count , 0),
        "whos": [this.renderPeople(ele.whos)],
      })
    ));*/


    var detailsList=[];
    console.log(this.state.elements);

    if(this.state.elements.length > 0)
      this.state.elements.forEach( (ele) =>
      detailsList.push( {
        what: ele.what,
        howPurchase: ele.whos.reduce( (pv, cv) => pv + cv.count , 0),
        whos: this.renderPeople(ele.whos),
      })
    );

    console.log("PRIMA", detailsList)
    detailsList = JSON.stringify(detailsList);

    console.log(detailsList);

    return (
    <div>
      ciao
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

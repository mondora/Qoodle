import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export default class QoodleDetails extends Component {



  constructor(){
    super();

    this.state =
    {
      nome : "",//nome qoodle che mi hanno passato
      usrname: "",
      elements: [
        {
          what: "pere",
          whos: [
            {name: "example.com", count: 5 },
            {name: "test2@gmail.com", count: 3}
          ]
      },
      {
        what: "mele",
        whos: [
          {name: "ex2.com", count: 4 },
          {name: "test2@gmail.com", count: 15}
        ]
    }
      ]
    }
  }

  static defaultProps =
  {
    purchase: true
  }




  componentDidMount()
  {
    var id;
    if (typeof window !== 'undefined')
      id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/details/' + id;
    var myInit = {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        };

        var nameLogged = "exampleUser";
        if( window.gapi && window.gapi.auth2 && window.gapi.auth2.getAuthInstance() && !(window.gapi.auth2.getAuthInstance().currentUser === "undefined"))
          nameLogged = window.gapi.auth2.getAuthInstance().currentUser.Ab.profileObj.email;

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
          username: nameLogged
          });
    }
    .bind(this))
    .catch((error) => { console.error(error); });;

  }




  renderPeople(whos)
  {
    return (   whos.map( (who) => <div key={who.name}> - {who.name}  ( {who.count}  ) </div>)   );
  }


  renderElement()
  {

    return (
    <div>
    {this.state.elements.map( (ele) => <div key={ele.what}> <div className="elements"> elemento : {ele.what} (  {ele.whos.reduce( (pv, cv) => pv + cv.count , 0)}  )</div> <div>{this.renderPeople(ele.whos)}</div>  </div> )}
    </div>);
  }

  render()
  {
    return(
        <div>
          {this.renderElement()}
        </div>
    )
  }


}
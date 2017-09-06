import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export default class QoodleDetails extends Component {



  constructor(){
    super();

    this.state =
    {
      nome : "",//nome qoodle che mi hanno passato
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

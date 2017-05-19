import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';
import QoodleElement from "components/QoodleElement"
/////////////List Actions


export default class QoodleView extends Component {


    constructor () {
        super();

        this.state = {
          elements: [
                    {
                      name: 'Name',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '',
                      price: 0,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      name: 'Number Of Person',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      name: 'Number of Vegans',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/kiwi.png'
                    }
                ]
          }
        }


    Inc(iden)
    {
      const elementi = this.state.elements;


      console.log('QUESTI SONO GLI ELEMENTIIII',elementi[0].counter + 1 );




      var elemento;
      var somma=0;
      for(var i=0; i<elementi.length; i++)
        if (elementi[i].name === iden)
        {
          elemento = elementi[i];
          somma = elementi[i].counter + 1;
          break;
        }

{
      elemento.counter = somma;

      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
}


    }




    render(){

    return(
      <QoodleElement counter={this.state.elements[0].counter}
        id={this.state.elements[0].name}
        imgUrl={this.state.elements[0].imgUrl} name="Name" coin="$" price={35} um="kg" onInc={this.Inc.bind(this)}/>

  );
    }



}

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
      var somma=0;

      {
//usato findIndex per trovare l'indice in cui il nome è uguale a quello che cerco
      var i =elementi.findIndex(el => el.name === iden );
      var elemento = elementi[i];
      elemento.counter++;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
      }
    }

    Dec(iden)
    {
      const elementi = this.state.elements;
      var somma=0;
      {
//usato findIndex per trovare l'indice in cui il nome è uguale a quello che cerco
      var i =elementi.findIndex(el => el.name === iden );
      var elemento = elementi[i];

      console.log('ELEMENTO COUNTEEEEEEEEERR DEC ', elemento.counter);

      if(elemento.counter > 0) elemento.counter-- ;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);

            console.log('ELEMENTO COUNTEEEEEEEEERR DEC ', this.state.elements[0].counter);
      }
    }

    Object2QoodleElement(rowObject)
    {

      return(
        <QoodleElement counter={rowObject.counter}
        id={rowObject.name}
        imgUrl={rowObject.imgUrl} name={rowObject.name} coin="€"
        price={35} um="kg" onInc={this.Inc.bind(this)}
        onDec={this.Dec.bind(this)}
        />);
    }




    render(){
      var elementi = this.state.elements;
      var StampableElement = [];

      elementi.forEach(
        (ele) => StampableElement.push(<div className="col">{this.Object2QoodleElement(ele)}</div>)
      );


      return(
          <div className="row">
            {StampableElement}
          </div>
      );
    }



}

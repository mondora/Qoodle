import React, {Component} from "react";
import {Button, FormGroup, Panel} from 'react-bootstrap';
import QoodleElement from "components/QoodleElement";
import SummaryModal from "components/SummaryModal";

/////////////List Actions


export default class QoodleView extends Component {


    constructor () {
        super();

        this.state = {
          showSummaryModal: false,
          elements: [
                    {
                      name: 'Banana',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 1.5,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      name: 'MelaRossa',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 2,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      name: 'Kiwi',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 3.5,
                      counter: 0,
                      imgUrl: '_assets/img/kiwi.png'
                    },
                    {
                      name: 'Pesca',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 0,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      name: 'Uva',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      name: 'Number of Vegetarian',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/kiwi.png'
                    },
                    {
                      name: 'Nome',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 3,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      name: 'Number Of People',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 4,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      name: 'Number of Veggie',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '€',
                      price: 5,
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

      if(elemento.counter > 0) elemento.counter-- ;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
      }
    }

    Object2QoodleElement(rowObject)
    {

      return(
        <QoodleElement counter={rowObject.counter}
        id={rowObject.name}
        imgUrl={rowObject.imgUrl} name={rowObject.name} coin="€"
        price={rowObject.price} um="kg" onInc={this.Inc.bind(this)}
        onDec={this.Dec.bind(this)}
        />);
    }

    OpenSummary()
    {
        this.setState({showSummaryModal: true});
    }

    CloseSummary()
    {
        this.setState({showSummaryModal: false})
    }




    render(){
      const headerRiassunto = [{name:'Cosa'},{name:'Costo'},{name:'Quanti'}, {name: 'Costo Riga'}];

      var elementi = this.state.elements;
      var StampableElement = [];

      elementi.forEach(
        (ele) => StampableElement.push(<div className="col">{this.Object2QoodleElement(ele)}</div>)
      );

      var somma = 0;
      for(var i = 0; i<elementi.length; i++)
        somma += elementi[i].price * elementi[i].counter;

      somma = 'Totale: ' + somma +'€';

      return(
        <div>
          <div className="row">
            {StampableElement}
          </div>

            <Button id="buyButton" bsStyle="primary" onClick={this.OpenSummary.bind(this)}>{somma}</Button>

              <SummaryModal rows={this.state.elements} show={this.state.showSummaryModal} close={this.CloseSummary.bind(this)}/>


        </div>



      );
    }



}

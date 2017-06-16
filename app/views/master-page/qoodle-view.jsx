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
          title: 'Acquisto di gruppo di novembre',
          description: 'È a disposizione sortita varietà di verdure e frutta di stagione',
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

    renderSum()
    {
      var elementi = this.state.elements;

      var sum = 0;
      for(var i = 0; i<elementi.length; i++){
        sum += elementi[i].price * elementi[i].counter;
      }
      sum = 'Totale: ' + sum +'€';
      return sum;

    }

    Inc(id)
    {
      const elementi = this.state.elements;
      var sum=0;

      {
//usato findIndex per trovare l'indice in cui il nome è uguale a quello che cerco
      var i = elementi.findIndex(el => el.name === id );
      var elemento = elementi[i];
      elemento.counter++;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);

      }
    }

    Dec(iden)
    {
      const elementi = this.state.elements;
      var sum=0;
      {
//usato findIndex per trovare l'indice in cui il nome è uguale a quello che cerco
      var i =elementi.findIndex(el => el.name === iden );
      var elemento = elementi[i];

      if(elemento.counter > 0) elemento.counter-- ;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
      }
    }



    OpenSummary()
    {
        this.setState({showSummaryModal: true});
    }

    CloseSummary()
    {
        this.setState({showSummaryModal: false})
    }



    renderQoodleElements () {
      return this.state.elements.map(element => (
        <div className="col">
          <QoodleElement
            counter={element.counter}
            id={element.name}
            imgUrl={element.imgUrl}
            name={element.name}
            coin={element.coinoption}
            price={element.price}
            um={element.umoption}
            onInc={this.Inc.bind(this)}
            onDec={this.Dec.bind(this)}
          />
      </div>
      ));
    }

    render(){
      const headerRiassunto = [{name:'Cosa'},{name:'Costo'},{name:'Quanti'}, {name: 'Costo Riga'}];



      return(
        <div className="body">
          <h1 ><center>{this.state.title}</center></h1>
          <h3>{this.state.description}</h3>
          <div className="row">
            {this.renderQoodleElements()}
          </div>

            <Button id="buyButton" bsStyle="primary" onClick={this.OpenSummary.bind(this)}>{this.renderSum()}</Button>

              <SummaryModal
                rows={this.state.elements}
                show={this.state.showSummaryModal}
                close={this.CloseSummary.bind(this)}
                check={this.CloseSummary.bind(this)}
                />


        </div>



      );
    }



}

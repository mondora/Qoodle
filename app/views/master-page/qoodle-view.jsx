import React, {Component} from "react";
import {Button, FormGroup, Panel, Popover} from 'react-bootstrap';
import QoodleElement from "components/QoodleElement";
import SummaryModal from "components/SummaryModal";

import Timer from "components/Timer"

/////////////List Actions


export default class QoodleView extends Component {

  static defaultProps =
  {
    purchase: true
  }



    constructor () {
        super();






        this.state = {
          showSummaryModal: false,
          title: 'Acquisto di gruppo di novembre',
          description: 'È a disposizione sortita varietà di verdure e frutta di stagione',
          elements: [
                    {
                      id:1,
                      name: 'Banana',
                      min: 0,
                      max: 99999,
                      umoption: 'kg',
                      coinoption: '$',
                      price: 1.5,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      id:2,
                      name: 'MelaRossa',
                      min: 0,
                      max: 99999,
                      umoption: 'kg',
                      coinoption: '€',
                      price: 2,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      id:3,
                      name: 'Kiwi',
                      min: 0,
                      max: 99999,
                      umoption: '',
                      coinoption: '',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/kiwi.png'
                    },
                    {
                      id:4,
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
                      id:5,
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
                      id:6,
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
                      id:7,
                      name: 'Kiwi',
                      min: 0,
                      max: 99999,
                      umoption: 'bott',
                      coinoption: '€',
                      price: 3,
                      counter: 5,
                      imgUrl: '_assets/img/bana.png'
                    },
                    {
                      id: 8,
                      name: 'Number Of People',
                      min: 0,
                      max: 99999,
                      umoption: 'kg',
                      coinoption: '€',
                      price: 4,
                      counter: 0,
                      imgUrl: '_assets/img/redApple.png'
                    },
                    {
                      id: 9,
                      name: 'Number of Veggie',
                      min: 0,
                      max: 99999,
                      umoption: 'person',
                      coinoption: '',
                      price: 0,
                      counter: 0,
                      imgUrl: '_assets/img/kiwi.png'
                    }
                ]
          }
        }




    componentDidMount()
    {
      var myImage = document.querySelector('img');
      fetch('_assets/img/kiwi.png').then(
        function(response) {
        return response.blob();
        })
        .then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });

    /*  var myDemo = document.querySelector('#demo');

       fetch('_assets/img/prova.json').then(
        function(response) {
        return response.json();
        })
        .then(function(data) {
          myDemo.innerHTML = data.name;
              console.log( "ciao" , data.name) ;
      });*/


      var myDemo = document.getElementById('demo');

       fetch('_assets/img/provaElement.json').then(
        function(response) {
        return response.json();
        })
        .then(function(data) {
          myDemo.innerHTML =  " " + data.counter
      });

    }


    renderSum()
    {
      var elementi = this.state.elements;

      var sum = 0, counterSum = 0;
      for(var i = 0; i<elementi.length; i++){
        sum += elementi[i].price * elementi[i].counter;
        counterSum += elementi[i].counter;
      }
      sum = "Procedi all'acquisto " + '(Totale: ' + sum +'€)';
      counterSum = "Conferma le scelte prese (sono " + counterSum + ")" ;

      if(this.props.purchase)
        return sum;
      else
        return counterSum;

    }

    Inc(iden)
    {
      const elementi = this.state.elements;
      var sum=0;

      {
//usato findIndex per trovare l'indice in cui il nome è uguale a quello che cerco
      var i = elementi.findIndex(el => el.id === iden );
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
      var i =elementi.findIndex(el => el.id === iden );
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
        <div className="col" key={element.id}>
          <QoodleElement
            counter={element.counter}
            id={element.id}
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
if(this.props.purchase === true)

  <Button id="buyButton" bsStyle="primary" onClick={this.OpenSummary.bind(this)}>{this.renderSum()}</Button>
else
  <Button id="buyButton" bsStyle="primary" onClick={this.OpenSummary.bind(this)}>{this.renderSum()}</Button>


      return(
        <div className="body">
          <img className="immagineFetch"></img>
          <div id ="demo"></div>
          <Timer closingQoodle={new Date("July 13, 2017 13:53:00")} title={'Termine per acquistare:'} onFinished={ ()=> alert("non puoi più compiere acquisti")}/>

          <center><h1 >{this.state.title}</h1></center>
          <h3 id="QoodleDescription">{this.state.description}</h3>

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

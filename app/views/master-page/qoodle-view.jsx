import React, {Component} from "react";
import {Button, FormGroup, Panel, Popover} from 'react-bootstrap';
import QoodleElement from "components/QoodleElement";
import SummaryModal from "components/SummaryModal";
import Countdown from 'react-cntdwn';

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
                      id:1,
                      name: 'Banana',
                      min: 0,
                      max: 99999,
                      umoption: 'kg',
                      coinoption: '€',
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
                      coinoption: '€',
                      price: 3.5,
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
                      id: 8,
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
                      id: 9,
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
      const dateFormat = {
        day: 'DD',
        hour: 'HH',
        minute: 'MM',
        second: 'SS'
      }

      return(
        <div className="body">

          <div id="popover-div">
            <Popover
              id="popover-basic"
              placement="rigth"
              positionTop={10}
              title="La possibilità di fare acquisti termina tra:"
            >

               <strong>
                        <Countdown targetDate={new Date(2017, 5, 25)}
                          interval={1000}
                          timeSeparator={'  '}
                          leadingZero
                          onFinished={()=> console.log('PAZZOOOOOOOOOOOOOOOOOOOOOOOOOOO')}
                          format= {dateFormat} />

               </strong>

            </Popover>
          </div>



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

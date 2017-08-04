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
          id : 0,
          showSummaryModal: false,
          title: '',
          description: '',
          chiusura: new Date(),
          elements: []
          }
        }




    componentDidMount()
    {
      var url = 'http://localhost:4567/qoodles';
      var myInit = {
            method: 'get',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: { "id": "2"}
          };



      fetch(url, myInit)
      .then( function(response) {
        if(response.ok)
        return response.json();
        throw new Error("Network response was not ok")
      })
      .then(function(data) {
          { this.setState({
            elements: data.ele,
            title: data.title,
            description: data.description,
            chiusura: new Date (data.chiusura)
            });}
      }
      .bind(this))
      .catch((error) => { console.error(error); });;

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
      var i = elementi.findIndex(el => el.elId === iden );
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
      var i =elementi.findIndex(el => el.elId === iden );
      var elemento = elementi[i];

      if(elemento.counter > 0) elemento.counter-- ;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
      }
    }



    OpenSummary()
    {
      var url = 'http://localhost:4567/submit-qoodle-choices';
      var myInit = {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(
          {
            title : this.state.title,
            description : this.state.description,
            chiusura : this.state.chiusura,
            elements : this.state.elements
          })
      };


      fetch(url, myInit)
      .then( function(response) {
        if(!response.ok)
        throw new Error("Network response was not ok")
      });

        this.setState({showSummaryModal: true});
    }

    CloseSummary()
    {
        this.setState({showSummaryModal: false})
    }



    renderQoodleElements () {

      return this.state.elements.map(element => (
        <div className="col" key={element.elId}>
          <QoodleElement
            counter={element.counter}
            elId={element.elId}
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
          <Timer closingQoodle={this.state.chiusura} title={'Termine per acquistare:'} onFinished={ ()=> alert("non puoi più compiere acquisti")}/>

          <center><h1 >{this.state.title}</h1></center>
          <h3 id="QoodleDescription">{this.state.description}</h3>

          <div className="row">
            {this.renderQoodleElements()}
          </div>



            <Button id="buyButton" bsStyle="primary" onClick={this.OpenSummary.bind(this)}>{this.renderSum()}</Button>

              <SummaryModal
                rows={this.state.elements}
                show={this.state.showSummaryModal}
                close={this.OpenSummary.bind(this)}
                check={this.CloseSummary.bind(this)}
                />


        </div>



      );
    }



}

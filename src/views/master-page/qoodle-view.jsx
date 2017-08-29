import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement";
import SummaryModal from "../../components/SummaryModal";

import Timer from "../../components/Timer"



export default class QoodleView extends Component {

  static defaultProps =
  {
    purchase: true
  }



    constructor () {
        super();




        this.state = {
          username: "exampleUser",
          id : 0,//ora come esempio
          showSummaryModal: false,
          title: '',
          description: '',
          closingDate: new Date(),
          elements: []
          }
        }




    componentDidMount()
    {
      if (typeof window !== 'undefined') {
      var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

      this.setState({ id: id});
    }

      var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodle/' + id;
      var myInit = {
            method: 'get',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
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
            elements: data.ele,
            title: data.title,
            description: data.description,
            closingDate: new Date (data.closingDate)
            });
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
      sum = "Procedi all'acquisto " + "(Totale: " + sum + "€)";
      counterSum = "Conferma le scelte prese (sono " + counterSum + ")" ;

      if(this.props.purchase)
        return sum;
      else
        return counterSum;

    }

    Inc(iden)
    {
      const elementi = this.state.elements;


      var i = elementi.findIndex(el => el.elId === iden );
      var elemento = elementi[i];

      elemento.counter++;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);


    }

    Dec(iden)
    {
      const elementi = this.state.elements;
      var i =elementi.findIndex(el => el.elId === iden );
      var elemento = elementi[i];

      if(elemento.counter > 0) elemento.counter-- ;
      elementi[i] = elemento;

      this.setState(this.state.elements: elementi);
    }



    OpenSummary()
    {


      var elementi = this.state.elements.map( el => el.counter);
      var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodle/' + this.state.id;
      var myInit = {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(
          {
            id: this.state.id,
            username: this.state.username,
            elements : elementi
          })
      };


      fetch(url, myInit)
      .then( function(response) {
        if(!response.ok)
        throw new Error("Network response was not ok")
      });

      this.setState({showSummaryModal: false});
    }

    Open()
    {
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

    renderNotFound()
    {
      return (<div> <h2>{" Qoodle nr " + this.state.id +  " non trovato!"}</h2></div>);
    }

    render(){

      return this.state.elements.length > 0 ?
      (
        <div className="body">
          <div id="demo"></div>
          <Timer closingQoodle={this.state.closingDate} title={'Termine per acquistare:'} onFinished={ ()=>  window.location = "#/qoodles"}/>

          <center><h1 >{this.state.title}</h1></center>
          <h3 id="QoodleDescription">{this.state.description}</h3>

          <div className="row">
            {this.renderQoodleElements()}
          </div>



            <Button id="buyButton" bsStyle="primary" onClick={this.Open.bind(this)}>{this.renderSum()}</Button>

              <SummaryModal
                rows={this.state.elements}
                show={this.state.showSummaryModal}
                close={this.OpenSummary.bind(this)}
                check={this.CloseSummary.bind(this)}
                />


        </div>



      ) : this.renderNotFound();
    }



}

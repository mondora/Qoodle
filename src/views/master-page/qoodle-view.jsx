import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement";
import SummaryModal from "../../components/SummaryModal";
import InfoModal from '../../components/InfoModal';

import Timer from "../../components/Timer"
import MobileTimer from "../../components/MobileTimer"


export default class QoodleView extends Component {

  static defaultProps =
  {
    purchase: true
  }



    constructor () {
        super();



        this.state = {
          username: "",
          realName: "",
          id : 0,//ora come esempio
          showSummaryModal: false,
          showInfomModal: false,
          title: '',
          description: '',
          closingDate: new Date(),
          elements: [],
          point: 0,
          }
    }




    componentDidMount()
    {
      var token;
      var client;
      var email;
      var realNameLogged;

      if (typeof(Storage) !== "undefined")
      {
        token = sessionStorage.getItem("Idtoken");
        client = sessionStorage.getItem("IdClient");
        email = sessionStorage.getItem("email");
        realNameLogged = sessionStorage.getItem("name");
      }
      else {
        email = "exampleUser";
        realNameLogged = "realExample";
      }
            if (typeof window !== 'undefined') {
            var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

            this.setState({ id: id});
          }

            var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodle/' + id;
            var myInit = {
                  method: 'get',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json',
                    'id_token': token,
                    'id_client': client,
                    'email': email
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
                  closingDate: new Date (data.closingDate),
                  username: email,
                  realName: realNameLogged,
                  type: data.type,
                  point: data.type === "dem" ? 10 : 0,
                  });
            }
            .bind(this))
            .catch((error) => { console.error(error); });;



    }

    renderMobileSum()
    {
      var elementi = this.state.elements;

      var sum = 0, counterSum = 0;
      for(var i = 0; i<elementi.length; i++){
        sum += elementi[i].price * elementi[i].counter;
        counterSum += elementi[i].counter;
      }
      sum = "Continua" + "(Totale: " + sum + "€)";
      counterSum = "Conferma le scelte prese (sono " + counterSum + ")" ;

      if(this.state.type === "purchase")
        return sum;
      else
        return counterSum;

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

      if(this.state.type !== "dem")
        return sum;
      else
        return counterSum;

    }

    Inc(iden)
    {
      const elementi = this.state.elements;



      var i = elementi.findIndex(el => el.elId === iden );
      var elemento = elementi[i];

      var po = this.state.point;

      if( (elemento.counter +1) <=  elemento.max &&
        (  (this.state.type === "dem" && po -1  >= 0 )  || (this.state.type !== "dem")   )
      ){
        elemento.counter++;
        po--;
        elementi[i] = elemento;
        this.setState({
          elements: elementi,
          point: po
        });
      }
      else
        alert("Non puoi la quantità desiderata di: " + elemento.name );


    }

    Dec(iden)
    {
      const elementi = this.state.elements;
      var i =elementi.findIndex(el => el.elId === iden );
      var elemento = elementi[i];

      var po = this.state.point;


      if(elemento.counter >= 0 && (elemento.counter -1) >= elemento.min &&
      (  (this.state.type === "dem" && po +1  <= 10 )  || (this.state.type !== "dem")   )
    )
      {
        elemento.counter--;
        po++;
        elementi[i] = elemento;

        this.setState({
          elements: elementi,
          point: po
        });
      }
      else
        alert("Non puoi la quantità desiderata di: " + elemento.name );

    }



    OpenSummary()
    {
      var token;
      var client;
      var email;
      var realNameLogged;

      if (typeof(Storage) !== "undefined")
      {
        token = sessionStorage.getItem("Idtoken");
        client = sessionStorage.getItem("IdClient");
        email = sessionStorage.getItem("email");
        realNameLogged = sessionStorage.getItem("name");
      }
      else {
        email = "exampleUser";
        realNameLogged = "realExample";
      }

      var elementi = this.state.elements.map( el => el.counter);

      var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodle/' + this.state.id;
      var myInit = {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'id_token': token,
          'id_client': client,
          'email': email
        },
        body: JSON.stringify(
          {
            id: this.state.id,
            username: email,
            realName: realNameLogged,
            elements : elementi
          })
      };


      fetch(url, myInit)
      .then( function(response) {
        if(!response.ok)
        throw new Error("Network response was not ok")
      });

      this.setState({showSummaryModal: false,
                      showInfomModal: true});

    }


    confirmChoices()
    {

      this.setState({showInfomModal: false});

      window.location = "#/qoodles";
    }

    Open()
    {
      this.setState({showSummaryModal: true});
    }

    CloseSummary()
    {
        this.setState({showSummaryModal: false})
    }


    renderDescription()
    {
      if(this.state.description !== '')
        return <h3 id="QoodleDescription">{this.state.description}</h3>
    }

    renderPoint()
    {
      if(this.state.type === "dem")
        return <p>{this.state.point}</p>
    }

    renderQoodleElements () {

      return this.state.elements.map(element => (
        <div className="col" key={element.elId}>
          <QoodleElement
            counter={element.counter}
            elId={element.elId}
            img64={element.img64}
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
          {this.renderPoint()}
          <div id="demo"></div>

          <Timer closingQoodle={this.state.closingDate} title={'Termine per acquistare:'} onFinished={ ()=>  window.location = "#/qoodles"}/>
          <MobileTimer closingQoodle={this.state.closingDate} title={'Termine per acquistare:'} onFinished={ ()=>  window.location = "#/qoodles"}/>

          <center><h1 >{this.state.title}</h1></center>
          {this.renderDescription()}
          <div className="row">
            {this.renderQoodleElements()}
          </div>


            <center>
              <Button id="buyButton" bsStyle="primary" onClick={this.Open.bind(this)}><span id="dsum">{this.renderSum()}</span><span id="msum">{this.renderMobileSum()}</span></Button>
            </center>

              <SummaryModal
                rows={this.state.elements}
                show={this.state.showSummaryModal}
                close={this.OpenSummary.bind(this)}
                check={this.CloseSummary.bind(this)}
                />



                <InfoModal
                  show={this.state.showInfomModal}
                  title="Conferma"
                  info={"Salvataggio delle scelte prese"}
                  showInfoModal={this.confirmChoices.bind(this)}/>

        </div>



      ) : this.renderNotFound();
    }



}

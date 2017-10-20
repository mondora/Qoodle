import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement";
import QoodleVoteElement from "../../components/QoodleVoteElement";
import SummaryModal from "../../components/SummaryModal";
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
                  point: data.type === "dem" ? Math.round(data.ele.length * ( 10 / 3)) : 0,
                  });
            }
            .bind(this))
            .catch((error) => { console.error(error); });;



    }

    renderSum()
    {
      var ordine = "Procedi all'ordine (Totale: " ;
      var scelta = "Conferma le scelte prese (sono " ;

      return this.renderTotal(ordine, scelta);
    }

    renderMobileSum()
    {
      var ordine = "Continua (Totale: ";
      var scelta = "Conferma scelte: ( ";

      return this.renderTotal(ordine, scelta);
    }

    renderTotal(ordine, scelte)
    {
      var elementi = this.state.elements;

      var sum = 0, counterSum = 0;
      for(var i = 0; i<elementi.length; i++){
        sum += elementi[i].price * elementi[i].counter;
        counterSum += elementi[i].counter;
      }


      if(this.state.type === "purchase")
        return (ordine + sum + "€)");
      else
        return (scelte + counterSum + " )");

    }


    onStarClick(iden, value) {
    //console.log('id: %s, value: %s', iden, value);

    const elementi = this.state.elements;
    var i = elementi.findIndex(el => el.elId === iden );
    var elemento = elementi[i];


    var po = value -  elemento.counter;


    
    if( elemento.counter <= 5 && elemento.counter >=0 && (this.state.point - po) >= 0 )
    {
      elemento.counter = value;
      this.setState({
        elements: elementi,
        point: this.state.point - po,
      });
    }
    else alert ( "Non puoi assegnare " + value + " voti, perchè disponi ancora di soltanto " + this.state.point);
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



    submitVotes()
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
      .then( (response => {
        if(response.ok){
            alert("Voto effettuato correttamente");
        }
        else {
          throw new Error("Network response was not ok");
        }
    }))
    .catch(error => {
        console.error(error);
        alert("Non è stato possibile effettuare la votazione richiesta!");
    });


      this.setState({showSummaryModal: false});
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
        return <center><h3 id="QoodleDescription">{this.state.description}</h3></center>
    }

    renderPoint()
    {
      if(this.state.type === "dem")
        return <center><div  id="votePointLabel">Voti disponibili:   <span id="votePoint">   {this.state.point} </span><span className="votes"> &#x2714;</span></div></center>
    }

    renderScadenza()
    {
      if( this.state.type === "purchase")
        return 'Puoi acquistare ancora per:';
      else
        return 'Puoi votare ancora per:'
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

    renderQoodleVoteElements () {

      return this.state.elements.map(element => (
        <div className="col" key={element.elId}>
          <QoodleVoteElement
            counter={element.counter}
            elId={element.elId}
            img64={element.img64}
            name={element.name}
            um={element.umoption}
            budget={this.state.point}
            onStarClick={this.onStarClick.bind(this)}
          />
      </div>
      ));
    }

    renderNotFound()
    {
      return (<div> <h2>{" Qoodle nr " + this.state.id +  " non trovato!"}</h2></div>);
    }


    renderElements()
    {
      return (this.state.type === "dem" ? this.renderQoodleVoteElements() : this.renderQoodleElements()  );
    }

    renderWhatDo()
    {
      if (this.state.type === "dem")
      return <h2 className="subTitlePage">Distribuisci i tuoi voti tra le possibili scelte</h2>
      else
      return <h2 className="subTitlePage">Per ogni elemento dovrai scegliere una quantità.</h2>
    }

    render(){

      return this.state.elements.length > 0 ?
      (
        <div className="body">
          <h1 className="titlePage">Partecipa a un Qoodle</h1>
          {this.renderWhatDo()}
            <div id="demo"></div>

          <Timer closingQoodle={this.state.closingDate} title={this.renderScadenza()} onFinished={ ()=>  window.location = "#/qoodles"}/>
          <MobileTimer closingQoodle={this.state.closingDate} title={'Termine per acquistare:'} onFinished={ ()=>  window.location = "#/qoodles"}/>

          {this.renderPoint()}

          <center><h1 >{this.state.title}</h1></center>
          {this.renderDescription()}
          <div className="row">
            {this.renderElements()}
          </div>


            <center>
              <Button id="buyButton" bsStyle="primary" onClick={this.Open.bind(this)}><span id="dsum">{this.renderSum()}</span><span id="msum">{this.renderMobileSum()}</span></Button>
            </center>

              <SummaryModal
                rows={this.state.elements}
                show={this.state.showSummaryModal}
                close={this.submitVotes.bind(this)}
                check={this.CloseSummary.bind(this)}
                />





        </div>



      ) : this.renderNotFound();
    }



}

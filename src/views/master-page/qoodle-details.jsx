import React, { Component } from "react";
import PropTypes from 'prop-types';
import Pie from "../../components/Pie.jsx";

export default class QoodleDetails extends Component {
  constructor() {
    super();

    this.state =
      {
        nome: "",//nome qoodle che mi hanno passato
        email: "",
        realName: "",
        elements: [],
        sector: -1,
        type: "",
        loading: true,
      }
  }

  componentDidMount() {

    var token;
    var client;
    var email = "exampleMail";
    var realNameLogged = "exampleName";


    if (typeof (Storage) !== "undefined") {
      token = sessionStorage.getItem("Idtoken");
      client = sessionStorage.getItem("IdClient");
      email = sessionStorage.getItem("email");
      realNameLogged = sessionStorage.getItem("name");
    }

    var id;
    if (typeof window !== 'undefined')
      id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/details/' + id;
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
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Ooops...something went wrong.');
        }
      })
      .then((data => {
        this.setState({
          nome: data.nome,
          elements: data.elements,
          email: email,
          realName: realNameLogged,
          type: data.type,
          loading: false
        });
      }))
      .catch((error) => {
        console.error(error);
        alert("Non puoi vedere i dettagli");
        this.setState({loading: false});
      });;

  }


  handleClickOnSector(sect, label) {

    var detailsList = this.renderPart();
    var limitIndex = detailsList.findIndex((el) => el.label === label);

    var padding = detailsList.reduce((pv, cv, i) => pv + (cv.value === 0 && i <= limitIndex ? 1 : 0), 0);

    this.setState({ sector: sect + padding });

  }

  renderElementPie() {
    var sector = this.state.sector;//tipico
    var detailsList = this.renderPart();

    console.log("PRIMA", detailsList[sector])

    var tot = detailsList[sector].whos.reduce((pv, el) => pv + el.how, 0);
    var sliceList = [];

    var palette = ["#ff4e50", "#fc913a", "#f9d62e", "#eae374", "#e2f4c7"];
    if(!this.state.loading)
    {
        if (detailsList[sector].whos.length > 0 && tot !== 0) {
          var i = 0;
          detailsList[sector].whos.forEach((el) =>
            sliceList.push({
              label: el.who,
              value: Math.round(el.how / tot * 100, -1),
              color: palette[(i++ % palette.length)]
            }));

          console.log("DOPO slice", sliceList);
          return (<Pie data={sliceList} tot={tot} title={detailsList[sector].label} back={this.returnAtQoodle.bind(this)} type={this.state.type} />);
        }
        else { return this.state.loading? <div><h2>Loading</h2></div> : <center><h2>NESSUNO HA ANCORA EFFETTUATO SCELTE SIGNIFICATIVE</h2></center> }

  } return <div><h2>Loading</h2></div>;
      
  }

  renderQoodle() {

    var detailsList = this.renderPart();

    //console.log("PRIMA", detailsList)

    var tot = detailsList.reduce((pv, el) => pv + el.value, 0);


    var sliceList = [];

    var palette = ["#e2f4c7", "#eae374", "#f9d62e", "#fc913a", "#ff4e50"];

    var win = "blue";
    if (this.state.type === "dem") {
      palette = ["lightgrey", "lightgrey", "lightgrey", "lightgrey", "lightgrey"];
      win = "lightgreen";
    }
    if(!this.state.loading){
      if (detailsList.length > 0 && tot !== 0) {
        var i = 0;
        detailsList.forEach((el) =>
          sliceList.push({
            label: el.label,
            value: Math.round(el.value / tot * 100, -1),
            color: palette[(i++ % palette.length)]
          }));


        if (this.state.type === "dem") {
          var indexOfMaxValue = sliceList.reduce((iMax, x, i, arr) => x.value > arr[iMax].value ? i : iMax, 0);
          console.log("più voti", sliceList[indexOfMaxValue].label);
          sliceList[indexOfMaxValue].color = win;
        }
        return (<Pie data={sliceList} onSectorClick={this.handleClickOnSector.bind(this)} tot={tot} title={this.state.nome} type={this.state.type} />);
      }
      else { return <center><h2>NESSUNO HA ANCORA EFFETTUATO SCELTE SIGNIFICATIVE</h2></center> }

  } return <div><h2>Loading</h2></div>;

}

  renderPart() {
    var detailsList = [];
    console.log("elementi nello stato", this.state.elements);

    if (this.state.elements.length > 0)
      this.state.elements.forEach((ele) =>
        detailsList.push({
          label: ele.what,
          value: ele.whos.reduce((pv, cv) => pv + cv.count, 0),
          whos: this.renderPeople(ele.whos),
        })
      );

    console.log("elementi nella lista dettagli", detailsList);

    return detailsList;
  }




  renderPeople(whos) {
    var detailsList = [];

    whos.map((who) =>
      detailsList.push(
        {
          who: who.realName,
          how: who.count
        }));
    return (detailsList);
  }

  returnAtQoodle() {
    this.setState({ sector: -1 });
  }


  renderCorrectPie() {
    if (this.state.sector === -1)
      return this.renderQoodle();
    else
      return this.renderElementPie();
  }


  render() {




    return <div className="body">
      <h1 id="summaryTitle" className="titlePage">Riassunto scelte compartecipate</h1>
      {this.renderCorrectPie()}
    </div>;



  }




}

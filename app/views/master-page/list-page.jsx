 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import ListQoodleElement from "components/ListQoodleElement";
/////////////List Actions


class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: []
        };
    }


    componentDidMount()
    {
      var data = fetch('_assets/mock-server/Qoodles.json')
      .then( function(response) {
        if(response.ok)
        return response.json();
        throw new Error("Network response was not ok")
      })
      .then(function(data) {
          data.forEach( (ele)=>
          ele.dataChiusura = new Date(ele.dataChiusura).toDateString());;
          { this.setState({ Qoodle: data });}
      }
      .bind(this))
      .catch((error) => { console.error(error); });

    var url = 'http://localhost:4567/hello';

    fetch(url, {
    method: 'get',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain',
    },
  }).
  then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.text();
    } else {
      throw new Error('Ooops...something went wrong.');
    }
  }).then(function(data) {
    console.log(data.toString());
  })
  .catch(e => console.log(e.message));



/*  var url = 'http://localhost:4567/qoodles';

  fetch(url, {
  method: 'get',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
}).
then((res) => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw new Error('Ooops...something went wrong.');
  }
  })
  .then(function(data) {
      data.forEach( (ele)=>
      ele.dataChiusura = new Date(ele.dataChiusura).toDateString());;
      { this.setState({ Qoodle: data });}
  }
  .bind(this))
  .catch((error) => { console.error(error); });
*/



    }





    open(){
      {alert("partecipa al qoodle")}
    }

    details()
    {
      {alert("visualizza dettagli")}
    }

    renderListQoodleElements () {
      return this.state.Qoodle.map(element => (
        <div className="col" key={element.id.toString()} id ={element.id}>
          <ListQoodleElement
            id={element.id}
            title={element.titolo}
            partecipants={element.partecipanti}
            description={element.descrizione}
            closingDate={element.dataChiusura.toString()}
            openIt={this.open.bind(this)}
            details={this.details.bind(this)}
            />
      </div>
      ));
    }






    render()
    {
      var d = new Date(2017, 5, 22);
      var n = d.toString();

      var testDate = new Date();
      testDate = new Date( (testDate.getTime() - 100000));



      return (

        <div id="list">
          <h1 ><center>Lista di tutti i Qoodle</center></h1>

          <div className="row">
            {this.renderListQoodleElements()}
          </div>

        </div>
        )
    }
}

export default ListPage;

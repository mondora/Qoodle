 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import ListQoodleElement from "components/ListQoodleElement";
/////////////List Actions


class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: [
                {
                    id: 1,
                    titolo: "Gas di Novembre",
                    descrizione: "idfsofdsijjfsdijfsdijfsijosdfjiofd",
                    partecipanti: 6,
                    dataChiusura: new Date("October 13, 2014 11:13:00").toDateString()

    },
                {
                  id: 2,
                  titolo: "Christams Dinner",
                  descrizione: "idfsofdsijjfsdijfsdijfsijosdfjiofd",
                  partecipanti: 4,
                  dataChiusura: new Date("October 13, 2018 11:13:00").toDateString()
                }


            ]
        };
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

 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {bindActionCreators} from "redux";
import ListQoodleElement from "components/ListQoodleElement";
/////////////List Actions


class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            struct: [
                {
                    titolo: "Christams Dinner",
                    descrizione: "pranzo di natale",
                    total_response: 5,
                    closing_date: new Date("October 13, 2014 11:13:00").toDateString()
    },
                {
                    titolo: "Gas",
                    descrizione: "acquisto di frutta",
                    total_response: 3,
                    closing_date: new Date("May 13, 2014 11:13:00").toDateString()
                }


            ]
        };
    }


    open(){
      {alert("per i dettagli stiamo lavorando")}
    }











    render()
    {
      var d = new Date();
      var n = d.toString();


      return (
        <div id="lista">
        <h1>PROVAA</h1>
          <ListQoodleElement
            id={1}
            title={"Gas di Novembre"}
            partecipants={6}
            description={"quaququa anche la per un acquisto migliore"}
            closingDate={n}
            openIt={this.open.bind(this)}
            />

        </div>
        )
    }
}

export default ListPage;

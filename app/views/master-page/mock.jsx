import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export default class Elenco extends Component {

    constructor() {
        super();
        this.state = {
            struct: [
                {
                    titolo: "Christams Dinner",
                    descrizione: "pranzo di natale",
                    total_response: 5
                },
                {
                    titolo: "Gas",
                    descrizione: "acquisto di frutta",
                    total_response: 3
                }


            ]
        };
    }

        render()
        {
           return ( <div>
               <div>{this.state.struct[0].titolo}</div>
               <div>{this.state.struct[0].descrizione}</div>
               <div>{this.state.struct[0].total_response}</div>
            </div>);
        }

}

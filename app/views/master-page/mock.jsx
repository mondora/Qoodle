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


    renderHeader()
    {


        return (
            Object.keys(this.state.struct[0]).map( (e) => <td>{e}</td>)
        );
    }

    renderBody()
    {
        var righe = [];
        var riga =[];
        var obj ;


        for(var i=0; i<this.state.struct.length; i++) {
            obj = this.state.struct[i];
            riga = (Object.keys(obj).map((e) => <td>{obj[e]}</td>));
            righe.push(<tr>{riga }</tr>);
        }

        return righe;
    }


    renderTable()
    {
        return (<div>
        <table className="responsive-table">
            <caption>List of open Qoodles</caption>
            <thead>
            <tr>
                {this.renderHeader()}
            </tr>
            </thead>
            <tfoot>

            </tfoot>
            <tbody>
            {this.renderBody()}

            </tbody>
        </table>
            </div>
        );

    }


        render()
        {
           return ( <div>
               {this.renderTable()}
               <div>{this.state.struct[0].titolo}</div>
               <div>{this.state.struct[0].descrizione}</div>
               <div>{this.state.struct[0].total_response}</div>
               <div>{"buongiorno"}</div>
               <div>{this.state.struct.length}</div>
            </div>);
        }

}

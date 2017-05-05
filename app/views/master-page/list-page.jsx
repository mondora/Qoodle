 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {bindActionCreators} from "redux";

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


    renderHeader()
    {
        return (
            Object.keys(this.state.struct[0]).map( (e) => <th scope="col">{e}</th>)
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

    renderFooterTable(){
        var span= Object.keys(this.state.struct[0]).length;//numero colonne da unire
        return (<td scope="col" colSpan={span}>I qoodle presenti in memoria sono:  {this.state.struct.length}</td>);

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
                    <tfoot >
                        {this.renderFooterTable()}
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
        return (
            this.renderTable()

        );
    }
}

export default ListPage;



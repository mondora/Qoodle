import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import Riassunto from "components/riassunto";
import QoodleHeaderTable from "components/QoodleHeaderTable";
import QVFooterTable from "components/qv-footer-table";
import QVInputTable from "../../components/qv_input_table";
import QVRowTable from "components/qv-row-table";

class QoodleView extends Component
{

    constructor () {
        super();

        this.state = {
            isOpenMenu: false,
            currentValue: {},
            struct: [
                {
                    name: "Name",
                    type: "text"
                },
                {
                    name: "Number of person",
                    type: "number"
                },
                {
                    name: "Number of vegans",
                    type: "number"
                }
            ],
            elementsTable: [
                {
                    "Name": "Francesco",
                    "Number of person": 4,
                    "Number of vegans": 4
                },
                {
                    "Name": "Chiara",
                    "Number of person": 2,
                    "Number of vegans": 0
                },
                {
                    "Name": "Davide",
                    "Number of person": 1,
                    "Number of vegans": 0
                },

            ]
        };
    }


    handleChange(fieldName, event) {
       // var currentValue = this.state.currentValue;// se ho già qualcosa
       // currentValue[fieldName] = event.target.value;
        var result = {};
        for (var attrname in this.state.currentValue) { result[attrname] = this.state.currentValue[attrname]; }
        console.log(event);
        result[fieldName] = event.target.value;

        this.setState({currentValue: result});
        //console.log(fieldName);
        //console.log(event.target.value);
    }

    handleKeyPress(event)
    {
        //console.log(event.charCode);
        //console.log(Object.keys(this.state.currentValue).length);
        //console.log(this.state.currentValue + "   " + this.state.struct.length)
        //controllo che almeno 3 campi siano inizializzati
        if(event.charCode === 13  && Object.keys(this.state.currentValue).length === this.state.struct.length)
        {
            this.setState({elementsTable: this.state.elementsTable.concat([this.state.currentValue])});
        }

    }



    somma(itemKey, obj)
    {
        var sum = 0;
        //obj sono i dati dei partecipanti.
        //prop conterrà name, numberofperson etc
        //per ogni proprietà delloggetto (se sto considerando quella proprietà) &&  se è un numero lo sommo
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && itemKey === prop && typeof parseInt(obj[prop]) == "number") {
                sum += parseInt(obj[prop]);
            }
            else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                sum += this.somma(itemKey, obj[prop]);
            }
        }
        return sum;
    }



    render(){
      //per ogni elemento mi creo una riga come deciso da QVRowTable
        var dataRows = [];
        var elementi = this.state.elementsTable;

        for(var i=0; i<elementi.length; i++)
        {
            dataRows.push( <QVRowTable ele={elementi[i]}></QVRowTable> ) ;
        }
        console.log(dataRows);


            return (
                <div className="container">
                <div id="rowStats">
                <Riassunto struct={this.state.struct} elementsTable={this.state.elementsTable}/>
                </div>
                <table className="responsive-table">
                    <caption> A Christmas Dinner</caption>
                    <thead>
                    <QVHeaderTable struct={this.state.struct}/>
                    </thead>
                    <tfoot>

                    <QVFooterTable struct={this.state.struct} elementsTable={this.state.elementsTable}/>

                    </tfoot>
                    <tbody>

                    <QVInputTable onChangeTip={this.handleChange.bind(this)} onKeyTip={this.handleKeyPress.bind(this)} struct={this.state.struct}/>


                    {dataRows}

                    </tbody>
                </table>
            </div>);

    }



}

export default QoodleView;

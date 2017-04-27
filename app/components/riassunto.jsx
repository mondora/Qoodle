import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


class Riassunto extends Component{

    constructor(props)
    {
        super(props);
        this.state = { str : this.props.struct,
            elements : this.props.elementsTable
        };

    }

    summa(itemKey, obj)
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
                sum += this.summa(itemKey, obj[prop]);
            }
        }
        return sum;
    }


    render()
    {
        var sintesi = [];
        var somma;
        var lbl;

        for(var i=0; i<this.state.str.length; i++)
        {
            if(i != 0) {
                somma = this.state.str[i].type == "number" ? this.summa(this.state.str[i].name, this.state.elements) : "";
                lbl = this.state.str[i].name;
            }
            else {
                somma = this.state.elements.length;//nel primo caso devo contare quante occorrenze ho.
                lbl = "Total Response";
            }
            sintesi.push(<div className="cellStats">{somma}
                <label>{lbl}</label>
            </div>);

        }
        return (<div>{sintesi}</div>);
    }


}

export default (Riassunto);
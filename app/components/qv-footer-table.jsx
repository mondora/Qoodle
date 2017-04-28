import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
//NON UTILIZZATO PERCHÈ NON AGGIORNA LO STATO... STRANO

class QVFooterTable extends Component {

    constructor(props)
    {
        super(props);


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


    render() {
        var footerItem = [];


        for(var i=0; i<this.props.struct.length; i++)
        {
            var somma;
            //per ogni elemento dell'array struct controllo il tipo(se number)
            //passo a somma il nome del campo, e l'array di elementi pieni (oggetti)
            somma = this.props.struct[i].type === "number" ? this.summa(this.props.struct[i].name, this.props.elementsTable) : "";

            //cambia l'i, cioè, a che "descrizione campo" siamo, ma ne prendo sempre il nome.
            //quindi poi ciclo sugli elements, ma ogni volta con lo stesso nome

            footerItem.push(<td scope="col">{somma}</td>)


        }
        console.log(this.props.struct.length);

        return (<tr>{footerItem}</tr>);

    }


}
export default QVFooterTable;
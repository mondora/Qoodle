import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


class QoodleView extends Component
{

    constructor () {
        super();
        this.state = {
            isOpenMenu: false,
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
                }
            ]
        };
    }


    somma(itemKey, obj)
    {
        var sum = 0;

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



    renderHeaderTable(){
        var  headerItem = [];


        for(var i =0; i< this.state.struct.length; i++)
        {
            headerItem.push(<th scope="col" >{ this.state.struct[i].name }</th>)

        }


        return (<tr>{headerItem}</tr>)
    }

    renderFooterTable()   {
        var footerItem = [];


        for(var i=0; i<this.state.struct.length; i++)
        {
            var somma;
            somma = this.state.struct[i].type == "number" ? this.somma(this.state.struct[i].name, this.state.elementsTable) : "";


            footerItem.push(<td scope="col">{somma}</td>)

        }

        return (<tr>{footerItem}</tr>);

    }

    renderCellTable()   {
        var cellItem = [];

        for(var i=0; i<this.state.struct.length; i++)
        {
            cellItem.push(<td> <input type={this.state.struct[i].type}/></td>)

        }

        return (<tr>{cellItem}</tr>);
    }

    renderRigaTable(obj)
    {
        var riga = [];

            //pusho un array contenente ognuno il valore di un campo dell'oggetto(tra td)
            riga.push( Object.keys(obj).map((e) => <td>{obj[e]}</td>))

        return riga;
    }


    renderExampleTable()
    {
        var exampleItem = [];
        var elementi = this.state.elementsTable;

        for(var i=0; i<elementi.length; i++)
        {
            exampleItem.push( <tr>{this.renderRigaTable( elementi[i] )}</tr> ) ;
        }

        return (exampleItem)

    }



    render(){
            return (      <div className="container">
                <div id="rowStats" />
                <table className="responsive-table">
                    <caption />
                    <thead>
                    {this.renderHeaderTable()}
                    </thead>
                    <tfoot>
                    {this.renderFooterTable()}
                    </tfoot>
                    <tbody>
                    {this.renderCellTable()}
                    {this.renderExampleTable()}

                    </tbody>
                </table>
            </div>);

    }

}

export default QoodleView;
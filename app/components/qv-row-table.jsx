import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class QVRowTable extends Component
{

    constructor(props)
    {
      //props avrò un solo parametro con l'elemento
        super(props);
    }


    render()
    {
      var riga = [];

      //pusho un array contenente ognuno il valore di un campo dell'oggetto(tra td)
      riga.push( Object.keys(this.props.ele).map((e) => <td>{obj[e]}</td>));
      return (<tr>riga</tr>);

    }


}

export default QVRowTable;

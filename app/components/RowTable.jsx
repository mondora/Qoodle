import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class RowTable extends Component
{

    constructor(props)
    {
      //props avrò un solo parametro con l'elemento
        super(props);




    }




    render()
    {
      const rows = this.props.ele;

      var riga = [];
      //riga.push( Object.keys(this.props.ele).map((e) => <td>{this.props.ele[e]}</td>));
      return (<tr>{riga}</tr>);

    }


}

export default RowTable;

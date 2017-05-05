import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class QVInputTable extends Component
{
    constructor(props)
    {
        super(props);
    }

    //richiamo le mesime funzioni
    handleInputChange(fieldName, e) {

        this.props.onChangeTip(fieldName, e)
    }

    handleInputKeyPress(e) {
        this.props.onKeyTip(e);
    }

    renderColumns () {
        {}
    }

    render()
    {
        const struttura = this.props.struct;//mi prendo la struttura
        var cellItem = [];

        for(var i=0; i<struttura.length; i++)
        {
            cellItem.push(<td> <input onChange={this.handleInputChange.bind(this, struttura[i].name)} onKeyPress={this.handleInputKeyPress.bind(this)} type={struttura[i].type} placeholder={struttura[i].name} min={0} /></td>)

        }

        return (<tr>{cellItem}</tr>);
    }
}

export default QVInputTable;
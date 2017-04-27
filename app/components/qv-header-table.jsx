import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


class QVHeaderTable extends Component {

    constructor(props)
    {
        super(props);
        this.state = { str : this.props.struct};

    }


    render() {
        var headerItem = [];
        for (var i = 0; i < this.state.str.length; i++) {
            headerItem.push(<th scope="col">{ this.state.str[i].name }</th>)
        }


        return (<tr>{headerItem}</tr>)
    }

}
export default QVHeaderTable;
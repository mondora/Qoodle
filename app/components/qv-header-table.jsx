import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


class QVHeaderTable extends Component {

    constructor(props)
    {
        super(props);

    }


    render() {
        var headerItem = [];
        var colonne=this.props.struct;
        console.log('props attese',this.props);
        console.log('struct',this.props.struct);

        for (var i = 0; i < colonne.length; i++) {
            headerItem.push(<th scope="col">{ colonne[i].name }</th>)
        }


        return (<tr>{headerItem}</tr>);
    }

}
export default QVHeaderTable;

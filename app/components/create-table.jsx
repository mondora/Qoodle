import React, {Component, PropTypes} from "react";
import QoodleHeaderTable from "components/QoodleHeaderTable";
import RowTable from "components/RowTable"

export default class CreateTable extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isOpenMenu: false,
        };
    }

    render(){

        return(
          <table className="responsive-table">
            <caption>{this.props.tit}</caption>
            <thead>
              <QoodleHeaderTable struct={this.props.colonne}/>

            </thead>
            <tfoot>
              <RowTable ele={this.props.colonne} />
            </tfoot>
            <tbody>


            </tbody>
          </table>
        );
    }
}

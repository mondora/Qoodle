import React, {Component, PropTypes} from "react";
import QVHeaderTable from "components/qv-header-table";

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
              <QVHeaderTable struct={this.props.colonne}/>

            </thead>
            <tfoot>
            </tfoot>
            <tbody>


            </tbody>
          </table>
        );
    }
}

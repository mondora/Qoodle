import React, {Component} from "react";

import ColumnCreationModal from "components/ColumnCreationModal";
/////////////List Actions


export default class NewQoodle extends Component {

    render() {
        return (
            <div className="row">
              <ColumnCreationModal onAdd={() => console.log('ciao')}/>
            </div>
        );
    }

}

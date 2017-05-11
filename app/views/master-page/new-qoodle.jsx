import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';

import QVHeaderTable from "components/qv-header-table";
import ColumnCreationModal from "components/ColumnCreationModal";
/////////////List Actions


export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      showColumnModal : false,
      columns: [
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
                },

              ]
    }

  }

  close() {
    this.setState({ showColumnModal: false });
  }

  open() {
  this.setState({ showColumnModal: true });
}



    render() {
        return (
            <div className="row">
                  <FormGroup className='medium' bsSize="large">
                    <FormControl type="text" placeholder="Title" />
                  </FormGroup>
                  <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description" />
                  </FormGroup>

                  <Button className="cent" bsStyle="primary"  bsSize="large"  onClick={this.open.bind(this)}>
                    Add column
                     </Button>


                     <table className="responsive-table">
                       <caption> Dovrò mettere qui il Title</caption>
                       <thead>
                         <QVHeaderTable struct={this.state.columns}/>

                       </thead>
                       <tfoot>
                       </tfoot>
                       <tbody>


                       </tbody>
                     </table>





              <ColumnCreationModal onAdd={() => console.log('ciao')} show={this.state.showColumnModal}/>
            </div>
        );
    }

}

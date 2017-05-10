import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';

import ColumnCreationModal from "components/ColumnCreationModal";
/////////////List Actions


export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      showColumnModal : false
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
              <ColumnCreationModal onAdd={() => console.log('ciao')} show={this.state.showColumnModal}/>
            </div>
        );
    }

}

import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal} from 'react-bootstrap';

export default class InfoModal extends Component {

  constructor()
  {
    super();
  }

  render(){


    return(
    <Modal show={this.props.show}>
      <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{this.props.info}</h3>
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={() => this.props.showSavedModal()}>{"Ok"}</Button>
      </Modal.Footer>
    </Modal>)
  }
}

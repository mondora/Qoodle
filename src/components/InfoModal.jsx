import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';

export default class InfoModal extends Component {

  static propTypes = {
      show: PropTypes.bool,
      title: PropTypes.string,
      info: PropTypes.string.isRequired,
      showInfoModal: PropTypes.func.isRequired
  }

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
          <Button onClick={() => this.props.showInfoModal()}>{"Ok"}</Button>
      </Modal.Footer>
    </Modal>)
  }
}

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

export default class InfoModal extends Component {

  static propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
  }

  constructor() {
    super();
  }

  render() {
  
  
  return(<Modal show={this.props.show}>
        <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="chooseType">
            <center>Creazione Qoodle in corso</center>
        </Modal.Body>

        </Modal>);





  }

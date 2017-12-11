import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';



export default class SimpleChoiceModal extends Component {



  render() {

    const { choose } = this.props;
    const { close } = this.props;

    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Che tipo di scelte vuoi trattare?</Modal.Title>
          <div onClick={() => close()}>
            <i id="closeSimpleChoice" className="fa fa-times"></i>
          </div>
        </Modal.Header>
        <Modal.Body id="chooseType">
          <center><p><Button onClick={() => choose("generic")}>{"SCELTE GENERICHE"}</Button></p>
            <p><Button onClick={() => choose("dem")}>{"SCELTE DEMOCRATICHE"}</Button></p>
            <p><Button onClick={() => choose("purchase")}>{"SCELTE PER ACQUISTI DI GRUPPO"}</Button></p></center>
        </Modal.Body>

      </Modal>)
  }

}

SimpleChoiceModal.propTypes = {
  chooseType: PropTypes.func,
}

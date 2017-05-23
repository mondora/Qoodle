import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal, Checkbox, InputGroup} from 'react-bootstrap';
import SummaryRow from "components/SummaryRow";

export default class SummaryModal extends Component {

  constructor(props)
  {
    super(props);
  }


  static propTypes = {
    rows: PropTypes.array,
    close: PropTypes.func
    };


  render () {
    var summaryRows = [];
    const elements = this.props.rows;
    const {close} = this.props;
    const {check} = this.props;

    for(var i=0; i<elements.length; i++)
    {
      if(elements[i].price * elements[i].counter)
      {
        summaryRows.push(<p>
          <SummaryRow name={elements[i].name}
          price={elements[i].price}
          counter = {elements[i].counter}
          coinoption ={elements[i].coinoption}/></p>
        );
      }
    }

      return (
          <Modal show={this.props.show}>
              <Modal.Header>
                  <Modal.Title>{"Riassunto Acquisto"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {summaryRows}
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={() => check()}>{"Controlla lista, INDIETRO"}</Button>
                  <Button onClick={() => close()}>{"Lista esatta, PROCEDI"}</Button>
              </Modal.Footer>
          </Modal>
      )
  }

  }

  SummaryModal.defaultProps = {
  show : false,
  };

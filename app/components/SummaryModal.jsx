import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal, Checkbox, InputGroup} from 'react-bootstrap';
import SummaryRow from "components/SummaryRow";

export default class SummaryModal extends Component {

  static defaultProps =
  {
    focus: false
  }



  constructor()
  {
    super();
  }


  static propTypes = {
    rows: PropTypes.arrayOf(React.PropTypes.object),
    close: PropTypes.func,
    focus: PropTypes.bool
    };


  renderSummaryRows()
  {
    var summaryRows = [];
    const elements = this.props.rows;
    const {purchase} = this.props;

    for(var i=0; i<elements.length; i++)
    {
      if(elements[i].counter)
      {
        summaryRows.push(<p key = {elements[i].name}>
          <SummaryRow
          key = {elements[i].name}
          name={elements[i].name}
          price={elements[i].price}
          counter = {elements[i].counter}
          coinoption ={elements[i].coinoption}
          umoption={elements[i].umoption}
          focus={this.props.focus}/></p>
        );
      }


    }
    return(
        <Modal.Body>
            {summaryRows}
        </Modal.Body>);


  }


  render () {

    const {close} = this.props;
    const {check} = this.props;


      return (
          <Modal show={this.props.show}>
              <Modal.Header>
                  <Modal.Title>{"Riassunto Acquisto"}</Modal.Title>
              </Modal.Header>
              {this.renderSummaryRows()}
              <Modal.Footer>
                  <Button id="check" onClick={check}>{"Controlla lista, INDIETRO"}</Button>
                  <Button id="continue" onClick={close}>{"Lista esatta, PROCEDI"}</Button>
              </Modal.Footer>
          </Modal>
      )
  }

  }

  SummaryModal.defaultProps = {
  show : false,
  };

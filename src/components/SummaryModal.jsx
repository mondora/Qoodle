import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import SummaryRow from "./SummaryRow";

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
        summaryRows.push(
          <SummaryRow
          key={elements[i].name}
          name={elements[i].name}
          price={elements[i].price}
          counter={elements[i].counter}
          coinoption={elements[i].coinoption}
          umoption={elements[i].umoption}
          focus={this.props.focus}/>
        );
      }
    }

    if(summaryRows.length < 1 )
      summaryRows.push(<div key={"niente"}>non hai ancora scelto nulla. </div>);

    return(
        <Modal.Body>
            {summaryRows}
        </Modal.Body>);


  }


  render () {

    const {close} = this.props;
    const {check} = this.props;


      return (
          <Modal id="summary" show={this.props.show}>
              <Modal.Header>
                  <Modal.Title>{"Riassunto Scelte prese"}</Modal.Title>
              </Modal.Header>
              {this.renderSummaryRows()}
              <Modal.Footer>
                  <Button id="check" onClick={check}><span id="checkList">{"Controlla lista, "}</span>{"INDIETRO"}</Button>
                  <Button id="continue" onClick={close}><span id="okList">{"Lista esatta, "}</span>{"PROCEDI"}</Button>
              </Modal.Footer>
          </Modal>
      )
  }

  }

  SummaryModal.defaultProps = {
  show : false,
  };

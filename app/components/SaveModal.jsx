import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

export default class SaveModal extends Component{

  constructor(props){
    super(props);
    this.state = {
      scadenza: ''
    }
  }


  select(dataScadenza){
    console.log("QUESTÈ VUOL DIRE CHE HO FATTO UN SELECT", dataScadenza );
    this.setState(scadenza: dataScadenza);

    console.log("QUESTÈ VUOL DIRE CHE HO FATTO UN SELECT", this.state.scadenza );
  }

  render () {
      const {onSave} = this.props;
      var today = new Date();
      var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);



      return (
          <Modal show={this.props.show}>
              <Modal.Header>
                  <Modal.Title>{"Scegli una data di chiusura Qoodle e salva"}</Modal.Title>
              </Modal.Header>

              <Modal.Body>

                <div className ="block">
                    <InfiniteCalendar
                        width={570}
                        height={500}
                        selected={today}
                        disabledDays={[0,6]}
                        minDate={lastWeek}
                        onSelect={this.select.bind(this)}
                      />
                  </div>



              </Modal.Body>

              <Modal.Footer>
                  <Button onClick={() => onSave()}>{"Salva il Qoodle"}</Button>
              </Modal.Footer>
          </Modal>
      )
  }
}


SaveModal.defaultProps = {
  show : false,
};

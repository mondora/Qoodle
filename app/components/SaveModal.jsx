import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

export default class SaveModal extends Component{

  constructor(){
    super();
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
                        width={150}
                        height={225}
                        selected={today}
                        disabledDays={[0,6]}
                        minDate={lastWeek}
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

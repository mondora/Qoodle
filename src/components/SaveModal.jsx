import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

export default class SaveModal extends Component{

  constructor(props){
    super(props);
    this.state = {
      chiusura: new Date()
    }
  }


  static propTypes = {
      onSave: PropTypes.func.isRequired,
      show: PropTypes.bool
  }


  selectDate(dataScadenza){
    this.setState({chiusura: dataScadenza});
  }

  render () {
      const {onSave} = this.props;
      var today = this.state.chiusura;
      var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);



      return (
          <Modal id="save" show={this.props.show}>
              <Modal.Header>
                  <Modal.Title>{"Imposta una data termine compiere scelte."}</Modal.Title>
              </Modal.Header>

              <Modal.Body>

                <div className="block">
                    <InfiniteCalendar id="calendar"
                        height={250}
                        minDate={lastWeek}
                        selected={this.state.chiusura}
                        onSelect={this.selectDate.bind(this)}
                      />
                  </div>



              </Modal.Body>

              <Modal.Footer>
                  <Button onClick={() => onSave(this.state.chiusura)}>{"Salva il Qoodle"}</Button>
              </Modal.Footer>
          </Modal>
      )
  }
}


SaveModal.defaultProps = {
  show : false,
};

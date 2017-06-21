import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class ListQoodleElement extends Component {

  constructor()
  {
    super();


    this.state = {
      status: "success"
          }
  }




  static propTypes = {
    id: PropTypes.number.isRequired,
    partecipants: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    closingDate: PropTypes.any.isRequired,
    openIt: PropTypes.func.isRequired
  }


  changeStatus(){
    this.setState({status: "danger"})
  }




  renderClosingTime()
  {
    const dateFormat = {
      day:  'dd' + ' giorni ',
      hour:  'hh'+ ' ore ',
      minute: 'mm'+ ' minuti ',
      second: ' e '+ 'ss' + ' secondi '
    }


    const d = new Date(this.props.closingDate)

    const element=
    <Countdown
      targetDate={d}
      interval={1000}
      timeSeparator={'  '}
      leadingZero
      format={dateFormat}
      onFinished={this.changeStatus.bind(this)}
      />


      if(this.state.status === "success")
        return (element);
      else
        return (<h2>SCADUTO</h2>);


    return (element);


  }



  render()
  {
    const {openIt} = this.props;
    var date = new Date(this.props.closingDate)

    var timePadding = this.state.status === "success" ? "mancano: ": "";




    return(
      <div className='box' onClick = {() => this.props.openIt()}>

          <ListGroup>
          <ListGroupItem><h3>{this.props.title}</h3></ListGroupItem>
          <ListGroupItem>partecipanti: {this.props.partecipants}</ListGroupItem>
          <ListGroupItem bsStyle={this.state.status}>{timePadding} {this.renderClosingTime()} </ListGroupItem>
          </ListGroup>


      </div>
);


  }

}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem, Button, Image} from 'react-bootstrap';
import timer  from '../assets/img/timer.png';
import mountain from '../assets/img/montagna.jpg';
import people from '../assets/img/people.png';

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
    title: PropTypes.string.isRequired,
    partecipants: PropTypes.number,
    description: PropTypes.string.isRequired,
    closingDate: PropTypes.any.isRequired,
    openIt: PropTypes.func.isRequired,
    details: PropTypes.func.isRequired
  }


  changeStatus(){
    this.setState({status: "danger"})
  }


  renderParticipates()
  {
    const {openIt} = this.props;
    if(this.state.status === "success")
      return ( <ListGroupItem bsStyle={"warning"} id="partecipates" onClick = {() => openIt(this.props.id)}>PARTECIPA!</ListGroupItem> );
  }

  renderClosingTime()
  {

    var dateFormat;


  if(this.state.status === "success")
    dateFormat =
    {
        day:  'mancano dd' + ' giorni ',
    }
    else
    dateFormat =
      {
        day: 'SCADUTO'
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

    return (element);


  }



  render()
  {
    const {openIt} = this.props;
    const {details} = this.props;
    const targetId = this.props.id;

    var date = new Date(this.props.closingDate)
    date = date.getDate() + 1 ;

    var timePadding  =
    this.state.status === "success" ?
        <Image id="timer" src={timer}
        style={{width: 40, height: 40}}
        alt="loading"
        responsive />
    : "";




    return(
      <div className='boxList' >

          <ListGroup id="withBorder">
          <ListGroupItem>
          <center><Image id="event" src={mountain} alt="loading" responsive /></center>
          </ListGroupItem>
        <ListGroupItem id="QoodleBoxTitle" onClick= {() => details(targetId)}>
            <h2 id="QoodleCardTitle">{this.props.title}</h2>
            </ListGroupItem>

          <ListGroupItem id="partecipants">
            <Image id="people" src={people} alt="loading" responsive />
            partecipanti: {this.props.partecipants}</ListGroupItem>
          <ListGroupItem bsStyle={this.state.status} >
{timePadding} {this.renderClosingTime()} </ListGroupItem>
          {this.renderParticipates()}

          </ListGroup>


      </div>
);


  }

}

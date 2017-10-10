import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem, Image} from 'react-bootstrap';
import timer  from '../assets/img/timer.png';
import ingrandimento from '../assets/img/ingrandimento.png'
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
    details: PropTypes.func.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    owner: PropTypes.string,
  }


  changeStatus(){
    this.setState({status: "danger"})
  }


  renderParticipates()
  {
    const {openIt} = this.props;
    if(this.state.status === "success")
      return ( <ListGroupItem bsStyle={"warning"} id="partecipates" onClick={ () => openIt(this.props.id)}>PARTECIPA!</ListGroupItem> );
  }

  renderClosingTime()
  {

    var dateFormat;


  if(this.state.status === "success")
    dateFormat =
    {
        day:  'mancano dd ' + 'giorni',
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

  renderQoodleImage()
  {
    if (this.props.backgroundImage !== "")
      return   (

          <center><Image id="event" src={this.props.backgroundImage} alt="loading" responsive /></center>
    );
    else return "";
  }


  renderTimer()
  {
    return  (  this.state.status === "success" ?
            <Image id="timer" src={timer}
            style={{width: 40, height: 40}}
            alt="loading"
            responsive />
          : "");
  }


  deleteQoodle()
  {

  }


  render()
  {
    const {details} = this.props;
    const targetId = this.props.id;
    const backgroundImage = this.props.backgroundImage;

    var date = new Date(this.props.closingDate)
    date = date.getDate() + 1 ;


    return(
      <div className='boxList' >

          <ListGroup id="withBorder">
            <div id="oneEvent">
              {this.renderQoodleImage()}
              <i id="deleteMinus" className="fa fa-minus" aria-hidden="true" onClick={this.deleteQoodle.bind(this)}></i>
            </div>

        <ListGroupItem id="qoodleBoxTitle" onClick={() => details(targetId)}>
            <h2 id="qoodleCardTitle">{this.props.title}</h2>
            <Image id="ingrandimento" src={ingrandimento} width={"40px"} height={"40px"} alt="loading" responsive />
            </ListGroupItem>

          <ListGroupItem id="partecipants">
            <Image id="people" src={people} alt="loading" responsive />
            partecipanti: {this.props.partecipants}</ListGroupItem>
          <ListGroupItem bsStyle={this.state.status} >
{this.renderTimer()} {this.renderClosingTime()} </ListGroupItem>
          {this.renderParticipates()}

          </ListGroup>


      </div>
);


  }

}

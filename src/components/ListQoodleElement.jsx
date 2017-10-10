import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem, Image, Modal, Button} from 'react-bootstrap';
import timer  from '../assets/img/timer.png';
import ingrandimento from '../assets/img/ingrandimento.png'
import people from '../assets/img/people.png';

export default class ListQoodleElement extends Component {

  constructor()
  {
    super();


    this.state = {
      status: "success",
      show: false,
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

  tryDelete()
  {
    this.setState({show: !this.state.show});
  }

  renderDelete()
  {
    const {owner} = this.props;

    var email = typeof(Storage) !== "undefined" ? sessionStorage.getItem("email") : "";

    if(email === owner && this.state.status === "success")
     return <i id="deleteMinus"aria-hidden="true" onClick={this.tryDelete.bind(this)}>⊗</i>
    else
      return "";

  }


  render()
  {
    const {remove} = this.props;
    const {owner} = this.props;
    const {details} = this.props;
    const targetId = this.props.id;

    var date = new Date(this.props.closingDate)
    date = date.getDate() + 1 ;

    console.log("OWNER", owner);

    return(
      <div className='boxList' >

          <ListGroup id="withBorder">
            <div id="oneEvent">
              {this.renderQoodleImage()}
              {this.renderDelete()}
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



          <Modal show={this.state.show}>
            <Modal.Header>
                <Modal.Title>Vuoi davvero cancellare {this.props.title} ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
              <p><Button onClick={() => remove(targetId, owner)}>RIMUOVI IL QOODLE</Button></p>
              <p><Button onClick={this.tryDelete.bind(this)}>ANNULLA OPERAZIONE</Button></p></center>
            </Modal.Body>

          </Modal>



      </div>
);


  }

}

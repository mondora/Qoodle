import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem, Button, Image} from 'react-bootstrap';

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
    if(this.state.status === "success")
      return ( <ListGroupItem bsStyle={"warning"}>PARTECIPA!</ListGroupItem> );
      //  return <Button bsStyle="info">PARTECIPA!</Button>;
  }

  renderClosingTime()
  {
    const dateFormat = {
      day:  '- dd' + ' giorni ',
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
    const {details} = this.props;
    const targetId = this.props.id;

    var date = new Date(this.props.closingDate)

    var timePadding  =
    this.state.status === "success" ?
        <Image id="timer" src={'_assets/img/timer.png'}
        style={{width: 40, height: 40}}
        alt="loading"
        responsive />
    : "";


    return(
      <div className='boxList' onClick = {() => this.props.openIt()}>

          <ListGroup>

          <ListGroupItem id="QoodleBoxTitle" onClick= {() => details(targetId)}>
            <h2 id="QoodleCardTitle">{this.props.title}</h2>
              <Image id="lente" src={'_assets/img/ingrandimento.png'}
              style={{width: 40, height: 40}}
              alt="loading"
              responsive />
            </ListGroupItem>

          <ListGroupItem>partecipanti: {this.props.partecipants}</ListGroupItem>
          <ListGroupItem bsStyle={this.state.status}>
{timePadding} {this.renderClosingTime()} </ListGroupItem>
          {this.renderParticipates()}

          </ListGroup>


      </div>
);


  }

}

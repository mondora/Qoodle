import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-cntdwn';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

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
    openIt: PropTypes.func.isRequired
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
      day:  'dd' + ' giorni ',
      hour:  'hh'+ ' h. ',
      minute: 'mm'+ ' min. ',
      second: ' e '+ 'ss' + ' sec. '
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


  /*  var ciao;
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "TEST2");
        // Retrieve
        ciao = localStorage.getItem("lastname");
    } else {
        ciao = "Sorry, your browser does not support Web Storage...";
    }

*/

    return(
      <div className='box' onClick = {() => this.props.openIt()}>

          <ListGroup>
          <ListGroupItem><h2 id="QoodleCardTitle">{this.props.title}</h2></ListGroupItem>
          <ListGroupItem>partecipanti: {this.props.partecipants}</ListGroupItem>
          <ListGroupItem bsStyle={this.state.status}>{timePadding} {this.renderClosingTime()} </ListGroupItem>
          {this.renderParticipates()}
          </ListGroup>


      </div>
);


  }

}

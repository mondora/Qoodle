import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import StarRatingComponent from './StarRatingComponent.jsx';

export default class QoodleVoteElement extends Component {

  static defaultProps =
    {
      um: '',
      coin: '',

    }



  static propTypes = {
    counter: PropTypes.number,
    elId: PropTypes.number.isRequired,
    img64: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    um: PropTypes.string,
    onStarClick: PropTypes.func.isRequired

  }



  renderElementImage() {
    if (this.props.img64 !== "")
      return (
        <center><Image id="event" src={this.props.img64} alt="loading" responsive /></center>
      );
    else return "";
  }


  render() {

    var realName = "rate" + this.props.elId;


    return (<div id="star">


      <div id='one'>


        {this.renderElementImage()}
      </div>

      <h3>{this.props.name}</h3>
      <StarRatingComponent
        name={realName}
        value={this.props.counter}
        onStarClick={this.props.onStarClick}
        budget={this.props.budget}
        renderStarIcon={() => <span className="votes">&#x2714;</span>}
      />
    </div>
    );


  }

}

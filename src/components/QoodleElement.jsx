import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import Price from './Price';

export default class QoodleElement extends Component {

  static defaultProps =
  {
      counter : 0,
      um: '',
      coin: '',

  }



  static propTypes = {
    counter: PropTypes.number,
    elId: PropTypes.number.isRequired,
    img64: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coin: PropTypes.string.isRequired,
    price: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    um: PropTypes.string,
    Inc: PropTypes.func,
    Dec: PropTypes.func

  }


  renderElementImage()
  {
    if (this.props.img64 !== "")
      return   (
          <center><Image id="event" src={this.props.img64} alt="loading" responsive /></center>
    );
    else return "";
  }




  render()
  {
    const Inc = this.props.onInc;
    const Dec = this.props.onDec;
    const changeSettings = this.props.create;
    var plus;
    var minus;
    var settings;
    var counter;

    if(this.props.create === undefined){
      plus =  (<i className="fa fa-plus" onClick={() => Inc(this.props.elId)}></i>);
      minus = (<i className="fa fa-minus" id='minus' onClick={() => Dec(this.props.elId)}></i>);
      counter = (<i  id='counter'>{this.props.counter}</i>);
    }else {
      settings = (<i className="fa fa-settings" onClick={() => changeSettings(this.props.elId)}>&#9881;</i>);
    }




    return(
      <div className='box'>
      {counter}

      <div id='one'>
          {plus}
          {minus}
          {settings}

          {this.renderElementImage()}
          </div>


        <h3>{this.props.name}</h3>

            <Price coin={this.props.coin} price={this.props.price} um={this.props.um} name={this.props.name}></Price>




</div>);


  }

}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';
import Price from 'components/Price';

export default class QoodleElement extends Component {

  static defaultProps =
  {
      counter : 0,
      um: '',
      coin: '',

  }



  static propTypes = {
    counter: PropTypes.number,
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coin: PropTypes.string.isRequired,
    price: PropTypes.number,
    um: PropTypes.string,
    Inc: PropTypes.func,
    Dec: PropTypes.func

  }

  constructor()
  {
    super();
  }





  render()
  {
    const backgroundImage = this.props.imgUrl;
    const Inc = this.props.onInc;
    const Dec = this.props.onDec;
    const changeSettings = this.props.create;
    var coin="";
    var plus;
    var minus;
    var settings;
    var counter;

    if(this.props.create === undefined){
      plus =  (<i className="fa fa-plus" onClick={() => Inc(this.props.id)}></i>);
      minus = (<i className="fa fa-minus" id='minus' onClick={() => Dec(this.props.id)}></i>);
      counter = (<i  id='counter'>{this.props.counter}</i>);
    }else {
      settings = (<i className="fa fa-settings" onClick={() => changeSettings(this.props.id)}>&#9881;</i>);
    }


  /*  if(this.props.coin != '')
    {
      coin = " " + this.props.coin + " al "
    }*/


    return(
      <div className='box'>
      {counter}

      <div id='one'>
          {plus}
          {minus}
          {settings}

            <Image src={backgroundImage} alt="loading" responsive />
          </div>


        <h3 id="title">{this.props.name}</h3>
            <p>
            <Price coin={this.props.coin} price={this.props.price}></Price>
            {this.props.um}
            </p>
</div>);


  }

}

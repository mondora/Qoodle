import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';

export default class QoodleElement extends Component {

  static defaultProps =
  {
      counter : 0,
      coin: '€',
      um: 'kg',

  }



  static propTypes = {
    counter: PropTypes.number,
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coin: PropTypes.string.isRequired,
    price: PropTypes.number,
    um: PropTypes.string,

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

    console.log("BUONAAAAAAAAAAAAAAAAAASERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", this.props.create === undefined)
    var plus;
    var minus;
    var settings;

    if(this.props.create === undefined){
      plus =  (<i className="fa fa-plus" onClick={() => Inc(this.props.id)}></i>);
      minus = (<i className="fa fa-minus" id='minus' onClick={() => Dec(this.props.id)}></i>);
    }else {
      settings = (<i className="fa fa-settings" onClick={() => changeSettings(this.props.id)}></i>);
    }

    return(
      <div className='box'>
      <i  id='counter'>{this.props.counter}</i>

      <div id='one'>

          {plus}
          {minus}
          {settings}




            <Image src={backgroundImage} alt="loading" responsive />
          </div>


        <h3 id="title">{this.props.name}</h3>
        <p>{this.props.price} {this.props.coin} al {this.props.um}</p>
</div>);


  }

}

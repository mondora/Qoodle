import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';

export default class QoodleElement extends Component {

  static defaultProps =
  {
      counter : 0,
      coin: '€'

  }



  static propTypes = {
    counter: PropTypes.number,
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coin: PropTypes.string.isRequired,
    price: PropTypes.number,
    um: PropTypes.string,
    onInc: PropTypes.function,
    onDec: PropTypes.function
  }

  constructor()
  {
    super();
  }

I



  render()
  {
    const backgroundImage = this.props.imgUrl;
    const Inc = this.props.onInc;
    const Dec = this.props.onDec;

    return(
      <div className='box'>
      <i  id='counter'>{this.props.counter}</i>
      <i className="fa fa-minus" id='minus' onClick={() => Dec(this.props.id)}></i>
        <div id='one'>


            <Image src={backgroundImage} alt="loading" responsive />
          </div>

        <i className="fa fa-plus" onClick={() => Inc(this.props.id)}></i>
        <h3 id="title">{this.props.name}</h3>
        <p>{this.props.price} {this.props.coin} al {this.props.um}</p>
</div>);


  }

}

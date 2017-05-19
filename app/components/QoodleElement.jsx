import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';

export default class QoodleElement extends Component {

  static propTypes = {
      imgUrl: PropTypes.string,
      name: PropTypes.string.isRequired,
      coin: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
  };
  static defaultProps =
  {
      counter : 0
  }


  constructor(props)
  {
    super(props);
  }

I



  render()
  {
    const backgroundImage = this.props.imgUrl;
    const Inc = this.props.onInc;

    return(
      <div className='box'>
      <i  id='counter'>{this.props.counter}</i>
      <i className="fa fa-minus" id='minus'></i>
        <div id='one'>


            <Image src={backgroundImage} alt="loading" responsive />
          </div>

        <i className="fa fa-plus" onClick={() => Inc(this.props.id)}></i>
        <h3 id="title">{this.props.name}</h3>
        <p>{this.props.price} {this.props.coin} al {this.props.um}</p>
</div>);


  }

}
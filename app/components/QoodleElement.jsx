import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';

export default class QoodleElement extends Component {

  static propTypes = {
      imgUrl: PropTypes.string,
      name: PropTypes.string.isRequired,
      um: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
  };
  static defaultProps =
  {
      counter : 0
  }


  constructor(props)
  {
    super(props);
  }



  render()
  {
    const backgroundImage = this.props.imgUrl;


    return(
      <div className='box'>
      <i  id='counter'> {this.props.counter} </i>
      <i className="fa fa-minus" id='minus'></i>
        <div id='one'>


            <Image src={backgroundImage} alt="loading" responsive />
          </div>

        <i className="fa fa-plus"></i>
        <h3 id="title">{this.props.name}</h3>
        <p>45.99</p>
</div>);


  }

}

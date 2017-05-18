import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image} from 'react-bootstrap';

export default class QoodleElement extends Component {

  constructor(props)
  {
    super(props);
    this.state =
    {
      counter : 0,
    }


  }


  render()
  {

    return(
      <div className='box'>
      <i  id='counter'> {this.state.counter} </i>
      <i className="fa fa-minus" id='minus'></i>
        <div id='one'>


            <Image src="_assets/img/bana.png" alt="ti devi caricare" responsive />

          </div>

        <i className="fa fa-plus"></i>
        <h3 id="title">Eco Bag</h3>
        <p>45.99</p>
</div>);


  }

}

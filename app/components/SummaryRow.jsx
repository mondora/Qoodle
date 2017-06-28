import React, {Component, PropTypes} from "react";
import {Button} from 'react-bootstrap';

export default class SummaryRow extends Component
{

  static defaultProps =
  {
    focus: false
  }

  constructor()
  {
    super();
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    coinoption: PropTypes.string.isRequired,
    umoption: PropTypes.string,
    focus: PropTypes.bool
};


  renderDifferentRowType()
  {
    var riga = '';
    if(this.props.price != 0 ){
        riga = this.props.name
        + ' ( '+ this.props.price
        + this.props.coinoption
        + '  x  ' +
        this.props.counter +' )' +
        '    = ' + (this.props.price * this.props.counter) +
        this.props.coinoption
    }else {
      riga = "Numero di " +
      this.props.name + ": " +
      this.props.counter + " " +
      this.props.umoption
    }


    return    (  riga );
  }

  render()
  {
    var bottone = this.props.focus ? <Button>FOCUS</Button>: "";

    return (
    <p>{this.renderDifferentRowType()}{bottone}</p>
    );
  }
}

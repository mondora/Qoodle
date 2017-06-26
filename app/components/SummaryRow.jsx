import React, {Component, PropTypes} from "react";


export default class SummaryRow extends Component
{
  constructor(props)
  {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    coinoption: PropTypes.string.isRequired
};


  renderDifferentRowType()
  {
    var riga =  this.props.name
    + ' ( '+ this.props.price
    + '  x  ' +
    this.props.counter +' )' +
    '    = ' + (this.props.price * this.props.counter) +
    this.props.coinoption


    return    (  riga );
  }

  render()
  {
    return (
    <p>{this.renderDifferentRowType()}</p>
    );
  }
}

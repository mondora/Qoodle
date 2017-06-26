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
    coinoption: PropTypes.string.isRequired,
    umoption: PropTypes.string
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
    return (
    <p>{this.renderDifferentRowType()}</p>
    );
  }
}

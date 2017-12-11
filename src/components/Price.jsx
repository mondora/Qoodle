import React, { Component } from "react";


export default class Price extends Component {

  static defaultProps =
    {
      coin: '',
      price: '0',
      um: ''
    }



  render() {
    var priceString = '';

    if (this.props.price !== '0' && Number(this.props.price) > 0) {
      priceString = " " + this.props.price + " " + this.props.coin
      if (this.props.um !== '')
        priceString += " al " + this.props.um;
      else
        priceString += " per ogni " + this.props.name;
      return (<p id="price">{priceString}</p>);
    }

    else {
      return (<p id="price">{this.props.um}</p>);
    }

  }



}

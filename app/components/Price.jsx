import React, {Component} from "react";


export default class Price extends Component{

  static defaultProps =
  {
    coin: '',
    price: '0'
  }




  constructor()
  {
    super();
  }

  render()
  {
    var priceString='';

    if(this.props.price != '0')
    {
      priceString = " " +  this.props.price + " " + this.props.coin + " al " ;
      return(<span id="price">{priceString}</span>);
    }

  else {
    return(<span id="price">{priceString}</span>);
  }

  }



}

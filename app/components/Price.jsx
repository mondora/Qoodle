import React, {Component} from "react";


export default class Price extends Component{

  static defaultProps =
  {
    coin: '',
    price: '0',
    um: ''
  }




  constructor()
  {
    super();
  }

  render()
  {
    var priceString='';

    if(this.props.price != '0' & this.props.um !='')
    {
      priceString = " " +  this.props.price + " " + this.props.coin + " al " + this.props.um;
      return(<p id="price">{priceString}</p>);
    }

  else {
    return(<p id="price">{this.props.um}</p>);
  }

  }



}

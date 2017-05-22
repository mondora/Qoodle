import React, {Component} from "react";


export default class SummaryRow extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div>{this.props.object.name} {this.props.object.price * this.props.object.counter}{this.props.object.coinoption}</div>
    );
  }




}

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

  render()
  {
    return (
          <p>{this.props.name} {this.props.price * this.props.counter}{this.props.coinoption}
          </p>
    );
  }
}

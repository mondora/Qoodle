import React, { Component, PropTypes } from "react";
import SummaryRow from "./SummaryRow";


export default class Summary extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    rows: PropTypes.array
  };

  render() {
    var summaryRows = [];
    const elements = this.props.rows;

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].price * elements[i].counter) {
        summaryRows.push(
          <SummaryRow key={elements[i].name}
            name={elements[i].name}
            price={elements[i].price}
            counter={elements[i].counter}
            coinoption={elements[i].coinoption} />
        );
      }
    }

    return (<div id="inlineRows">{summaryRows}</div>);



  }



}

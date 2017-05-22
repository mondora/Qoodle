import React, {Component, PropTypes} from "react";
import SummaryRow from "components/SummaryRow";


export default class Summary extends Component
{
  constructor(props)
  {
    super(props);
  }

  static propTypes = {
    rows: PropTypes.array
    };



  render()
  {
    var summaryRows = [];
    const element = this.props.rows;

    for(var i=0; i<element.length; i++){
      summaryRows.push(
      <SummaryRow name={element[i].name}
      price={element[i].price}
      counter = {element[i].counter}
      coinoption ={element[i].coinoption}/>
  );
}

    return (<div>{summaryRows}</div>);



  }



}

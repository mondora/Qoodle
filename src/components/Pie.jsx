import React, {Component} from "react";
import Torta from "./Torta.jsx";

export default class Pie extends Component {


  constructor (props)
  {
    super(props);

    this.state = {
            expandedSector: null,
        }


  }


  handleClickOnSector(sector) {
      console.log("DENTROPIE SETTORE:",sector);
      alert("CLICCATO SUL SETTORE", sector);//WHY??
  }

  handleMouseEnterOnSector(sector) {
      this.setState({expandedSector: sector})
  }


  renderLegendElement(element){
    var legendString ="";
  if(this.props.onSectorClick)
    legendString = "L'elemento " + element.label + " è stato scelto: " + Math.round(element.value  * this.props.tot / 100) +" volte";
  else
    legendString = element.label + " ha scelto " + this.props.element + ": "+ Math.round(element.value  * this.props.tot / 100)+ " volte";

    return legendString;
  }


render() {
const {expandedSector} = this.state



     return (
       <div>
       <div id="pie">
       <Torta
           data={ this.props.data }
           sectorStrokeWidth={2}
           expandedSector={expandedSector}
           onSectorHover={this.handleMouseEnterOnSector.bind(this)}
           onSectorClick={this.props.onSectorClick}
           width={500}
           height={500}
           expandOnHover
           shrinkOnTouchEnd
       />
</div>

     <div  id="legend">

        {
            this.props.data.map((element, i) => (
                <div key={i} >
                    <span style={{backgroundColor: element.color}}></span>
                      <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null, color: element.color, fontSize: "25px"}}>
                       {this.renderLegendElement(element)}
                    </span>
                </div>
            ))
        }

      </div>



      </div>);

  }


}

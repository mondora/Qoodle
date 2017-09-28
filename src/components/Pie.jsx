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

  handleMouseEnterOnSector(sector) {
      this.setState({expandedSector: sector})
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
                       L'elemento {element.label} è stato scelto: {element.value} volte
                    </span>
                </div>
            ))
        }

      </div>

      <Torta
          data={ this.props.data }
          sectorStrokeWidth={2}
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector.bind(this)}
          width={500}
          height={500}
          expandOnHover
          shrinkOnTouchEnd
      />


      </div>);

  }


}

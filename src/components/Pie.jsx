import React, {Component} from "react";
import Torta from "./Torta.jsx";
import {Image} from "react-bootstrap";
import back from "../assets/img/wBack.png";
import PropTypes from "prop-types"


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
    legendString = element.label + " ha scelto " + this.props.title + ": "+ Math.round(element.value  * this.props.tot / 100)+ " volte";

    return legendString;
  }


render() {
const {expandedSector} = this.state

  var bottone = <span></span>;
  if(this.props.back)
  {
    bottone =<Image id="back" src={back} onClick={this.props.back} width={150} height={150}></Image>
  }

    var realData=[];
    this.props.data.forEach( (el) => el.value != 0 ?  realData.push(el) : "" );

     return (
       <div>
       <div id="pie">
         <center><h1> {this.props.title}</h1></center>
       <Torta
           data={ realData }
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

        {bottone}
      </div>



      </div>);

  }


}




Pie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
  })),
  onSectorClick: PropTypes.func,
  tot: PropTypes.number,
  title: PropTypes.string,
  back: PropTypes.func,
}

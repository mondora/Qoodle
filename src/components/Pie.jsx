import React, { Component } from "react";
import PieChart from "./PieChart.jsx";
import { Image } from "react-bootstrap";
import back from "../assets/img/wBack.png";
import PropTypes from "prop-types"


export default class Pie extends Component {


  constructor(props) {
    super(props);

    this.state = {
      pieData: this.props.data,
      expandedSector: null
    }


  }



  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector })
  }


  renderLegendElement(element) {
    var legendString = "";
    var { type } = this.props;

    var labelChoice = type === "dem" ? [" è stato votato: ", " ha votato: "] : (type === "purchase" ? [" è stato comprato: ", " ha comprato "] : [" è stato scelto: ", " ha scelto "]);


    if (this.props.onSectorClick)
      legendString = "L'elemento " + element.label + labelChoice[0] + Math.round(element.value * this.props.tot / 100) + " volte";
    else
      legendString = element.label + labelChoice[1] + this.props.title + ": " + Math.round(element.value * this.props.tot / 100) + " volte";

    return legendString;
  }


  renderBackButton() {
    var button = <span></span>;
    if (this.props.back) {
      button = <Image id="back" src={back} onClick={this.props.back} width={150} height={150}></Image>
    }
    return button;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ pieData: nextProps.data, expandedSector: null });
    }
  }


  changeFontWeight(realData, element) {
    const { expandedSector } = this.state;
    var spessore;

    if (expandedSector !== null && realData[expandedSector].label === element.label)
      return (<span style={{ fontWeight: "bold", color: element.color, fontSize: "25px" }}>
        {this.renderLegendElement(element)}
      </span>);

    return (<span style={{ color: element.color, fontSize: "25px" }}>
      {this.renderLegendElement(element)}
    </span>)
  }

  render() {
    const { expandedSector } = this.state;
    const { pieData } = this.state;
    var spessore;

    var supportSector;

    var realData = [];
    pieData.forEach((el) => el.value != 0 ? realData.push(el) : "");

    return (
      <div>
        <div id="pie">
          <center><h1> {this.props.title}</h1></center>
          <PieChart
            data={realData}
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

        <div id="legend">

          {console.log(expandedSector)}

          {

            pieData.map((element, i) => (
              <div key={i} >
                <span style={{ backgroundColor: element.color }}></span>
                {this.changeFontWeight(realData, element)}

              </div>
            ))
          }

          {this.renderBackButton()}
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
  tot: PropTypes.number.isRequired,
  title: PropTypes.string,
  back: PropTypes.func,
  type: PropTypes.string
}

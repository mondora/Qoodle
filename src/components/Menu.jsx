import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {



  static propTypes = { isOpenMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired};

  open(link)
  {
      this.props.toggleMenu();
       window.location = link;
  }


  render(){

  return this.props.isOpenMenu ? (
            <div className="menu" style={{ position:"absolute", top:"0px", backgroundColor:"#5888d6",  height: "100vh", width:"100vw", zIndex:"999", left:"0"}}>
              <div onClick={this.props.toggleMenu.bind(this)} style={{position: "absolute", margin: "10px", fontSize: "50px" ,color: "white",right: "20px"}}>
                <i className="fa fa-times" ariaHidden="true"></i>
              </div>

                <div style={{ textAlign: "center", margin: "calc((100vh - 200px - 40px) / 2 )"}}>
                  <div onClick={this.open.bind(this, "#/qoodles")} style={{ backgroundColor:"white", display:"inline-block", width:"200px", height:"200px", margin:"20px", color:"#5888d6", borderRadius: "5px"}}>
                  <div style={{height:"70%", padding:"10px"}}>
                    <i className="fa fa-list-ol" ariaHidden="true" style={{fontSize:"70px", paddingTop:"30px"}}></i>
                  </div>
                  <span style={{fontSize: "24px", fontWeight: "bold"}}>Qoodles List</span>
                    </div>

                  <div onClick={this.open.bind(this, "#/create")} style={{ backgroundColor:"white", display:"inline-block", width:"200px", height:"200px", margin:"20px", color:"#5888d6",  borderRadius: "5px"}}>
                  <div style={{height:"70%", padding:"10px"}}>
                    <i className="fa fa-pencil-square-o" ariaHidden="true" style={{fontSize:"70px", paddingTop:"30px"}}></i>
                  </div>
                  <span style={{fontSize: "24px", fontWeight: "bold"}}>New Qoodle</span>
                    </div>
                </div>
            </div>
        ): null;
    }

}

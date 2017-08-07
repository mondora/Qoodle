import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {



  static propTypes = { isOpenMenu: PropTypes.bool.isRequired };

  render(){





  return this.props.isOpenMenu ? (
            <div className="menu" style={{ position:"absolute", top:"0px", backgroundColor:"#5888d6",  height: "100vh", width:"100vw", zIndex:"999", left:"0"}}>
                <div style={{ textAlign: "center", margin: "calc((100vh - 200px - 40px) / 2 )"}}>
                  <div style={{ backgroundColor:"white", display:"inline-block", width:"200px", height:"200px", margin:"20px", color:"#5888d6"}}>
                  <div style={{height:"70%", padding:"10px"}}>
                    <i className="fa fa-list-ol" aria-hidden="true" style={{fontSize:"70px"}}></i>
                  </div>
                  <span style={{fontSize: "22px"}}>Qoodles List</span>
                    </div>

                  <div style={{ backgroundColor:"white", display:"inline-block", width:"200px", height:"200px", margin:"20px", color:"#5888d6"}}>
                  <div style={{height:"70%", padding:"10px"}}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize:"70px"}}></i>
                  </div>
                  <span style={{fontSize: "22px"}}>New Qoodle</span>
                    </div>
                </div>
            </div>
        ): null;
    }

}

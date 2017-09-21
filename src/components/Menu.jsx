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
            <div className="menu">
              <div className="toggleMenu" onClick={this.props.toggleMenu.bind(this)}>
                <i className="fa fa-times"></i>
              </div>

                <div style={{ textAlign: "center", margin: "calc((100vh - 250px - 40px) / 2 )"}}>
                  <div id="menuElement" onClick={this.open.bind(this, "#/qoodles")} >
                  <div className="boxMenu">
                    <i className="fa fa-list-ol" ></i>
                  </div>
                  <span>Qoodles List</span>
                    </div>

                  <div id="menuElement" onClick={this.open.bind(this, "#/create")} style={{ backgroundColor:"#e2f4c7", display:"inline-block", width:"200px", height:"200px", margin:"20px", color:"grey",  borderRadius: "5px"}}>
                  <div className="boxMenu">
                    <i className="fa fa-pencil-square-o"></i>
                  </div>
                  <span>New Qoodle</span>
                    </div>
                </div>
            </div>
        ): null;
    }

}

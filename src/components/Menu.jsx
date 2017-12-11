import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {



  static propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  };

  open(link) {
    this.props.toggleMenu();
    window.location = link;
  }


  render() {

    return this.props.isOpenMenu ? (
      <div className="menu">
        <div className="toggleMenu" onClick={this.props.toggleMenu.bind(this)}>
          <i className="fa fa-times"></i>
        </div>

        <div id="allMenu" >
          <div className="menuElement" onClick={this.open.bind(this, "#/qoodles")} >
            <div className="boxMenu">
              <i className="fa fa-list-ol" ></i>
            </div>
            <span>Qoodles List</span>
          </div>

          <div className="menuElement" onClick={this.open.bind(this, "#/create")} >
            <div className="boxMenu">
              <i className="fa fa-pencil-square-o"></i>
            </div>
            <span>New Qoodle</span>
          </div>
        </div>
      </div>
    ) : null;
  }

}

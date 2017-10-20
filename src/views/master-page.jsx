import React, { Component } from "react";
import PropTypes from 'prop-types';
import Login from "./master-page/Login"
import Header from "../components/header"
/* LIST COMPONENTS */

export default class MasterPage extends Component {

  constructor()
  {
    super();
    this.state =
    {
      name: "invalid",
      email:"invalid",
      pictureUrl: "invalid"
    }

    sessionStorage.setItem("email", "invalid");
  }


    static propTypes = {
        children: PropTypes.node
    };


    check(n, e, pU, link)
    {
      this.setState({
          name: n,
          email: e,
          pictureUrl: pU
      });

      sessionStorage.setItem("email", e);

      window.location = link;
    }


    renderMainPage() {

        const {children} = this.props;

        var all ;

        if(this.state.email === "invalid")
        {//se è settato, ma non a invalid
          all = (<div> <Login update={this.check.bind(this)} email={this.state.email} link={"#/qoodles"} /></div>);
        }
        else {
          all = (     <div>  <Header update={this.check.bind(this)} name={this.state.name} pictureUrl={this.state.pictureUrl} link={"#/"}/> {children}   </div>);
        }

        return ( <div> {all} </div> );
    }

    renderLoadigInfo() {
        return (
            <div></div>
        );
    }

    render() {
        return (this.renderMainPage());
    }
}

import React, {Component, PropTypes} from "react";
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
  }


    static propTypes = {
        children: PropTypes.node
    };


    check(n, e, pU)
    {
      this.setState({
          name: n,
          email: e,
          pictureUrl: pU
      });
    }



    renderMainPage() {

        const {children} = this.props;

        var all ;

        if(this.state.email === "invalid")
        {//se è settato, ma non a invalid
          all = (<div> <Login aggiorna={this.check.bind(this)} email={this.state.email}/></div>);
          console.log("dovrei far vedere solo il login", this.state.email);
        }
        else {
          all = (     <div>  <Header aggiorna={this.check.bind(this)} name={this.state.name} pictureUrl={this.state.pictureUrl}/> {children}   </div>);
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

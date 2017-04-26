import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class SideField extends Component
{

    constructor(props)
    {

        super(props);
        var label = this.props.nome === 'title'? 'COLUMN' : 'SET ';
        this.state = { t : this.props.tipo,
                        n : this.props.nome,
                        lab: label,
                        };

        }



    render()
    {

        return(
            <div role="tabpanel" className="tab-pane active" id={this.state.n +  "Field"}>
                <p>

                     {this.state.lab + " " + this.state.n.toUpperCase()}
                </p>

                <div className="collapse in" id={"std" + this.state.n + "Field"} aria-expanded="true">
                    <input type={this.state.t}/>

                </div>

            </div>



        );

    }






}
export default (SideField);
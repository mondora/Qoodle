import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class CreateTable extends Component {

    constructor () {
        super();
        this.state = {
            isOpenMenu: false,
            struct: [
                {
                    name: "Name",
                    type: "text"
                },
                {
                    name: "Number of person",
                    type: "number"
                },
                {
                    name: "Number of vegans",
                    type: "number"
                }
            ],
            elementsTable: [
                {
                    "Name": "Francesco",
                    "Number of person": 4,
                    "Number of vegans": 4
                },
                {
                    "Name": "Chiara",
                    "Number of person": 2,
                    "Number of vegans": 0
                },
                {
                    "Name": "Davide",
                    "Number of person": 1,
                    "Number of vegans": 0
                }
            ]
        };
    }

    addStruct(){
        var stateStruct = this.state.struct;
        stateStruct.push({name: "new", type: "number"});

        this.setState({
            struct: stateStruct
        })
    }

    renderHeader(){
        var structure = this.state.struct;
        var strucArr = [];
        Object.keys(structure).forEach(function (key, index) {
            strucArr.push(<th scope="col">{structure[key].name}</th>);
        });
        return(strucArr);
    }

    render(){
        return(
            <table className="responsive-table">
                <caption />
                <thead>
                    <tr>
                        {this.renderHeader()}
                        <th onClick={this.addStruct.bind(this)} style={{cursor: "pointer", backgroundColor: "#FFF", color: "#f5b95f", border: "1px solid #f5b95f"}}>
                            <div>+</div>
                        </th>
                    </tr>
                </thead>
                <tfoot>

                </tfoot>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default connect(null, null) (CreateTable);

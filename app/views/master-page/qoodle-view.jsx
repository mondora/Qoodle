import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';
import QoodleElement from "components/QoodleElement"
/////////////List Actions


export default class QoodleView extends Component {


    constructor () {
        super();

        this.state = {
            isOpenMenu: false,
            currentValue: {}
          }
        }


    render(){

    return(
      <QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" price={35} um="kg"/>
    );
    }



}

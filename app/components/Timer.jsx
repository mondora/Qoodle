import Countdown from 'react-cntdwn';
import React, {Component} from "react";
import {Popover} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Timer extends Component{

constructor(){
  super();
}

static propTypes = {
    closingQoodle: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired
}

render(){

  const dateFormat = {
    day: 'DD',
    hour: 'HH',
    minute: 'MM',
    second: 'SS'
  }
return(
    <div id="popover-div" style={{ height: 20 }}>
      <Popover
        id="popover-basic"
        placement="right"
        positionTop={95}
        positionLeft={1100}
        title={this.props.title}
      >

         <strong>
                  <Countdown targetDate={this.props.closingQoodle}
                    interval={1000}
                    startDelay={2000}
                    timeSeparator={'  '}
                    leadingZero
                    onFinished={()=> alert("non puoi più compiere acquisti")}
                    format= {dateFormat} />

         </strong>

      </Popover>
    </div>
    )
}

}

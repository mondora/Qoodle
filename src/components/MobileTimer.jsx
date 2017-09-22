import Countdown from 'react-cntdwn';
import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class MobileTimer extends Component{

constructor(){
  super();
}

static propTypes = {
    closingQoodle: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    onFinished: PropTypes.func.isRequired,
}

render(){

  const dateFormat =  {
    day:  'dd' + ' giorni ',
    hour:  'hh'+ ' ore ' ,
    minute: 'mm'+ ' minuti ',
    second: ' e '+ 'ss' + ' secondi '
  }
return(
    <div id="mtimer">
        <div id="end">{this.props.title}</div>

         <div id="time"><strong>
                  <Countdown targetDate={this.props.closingQoodle}
                    interval={1000}
                    startDelay={2000}
                    timeSeparator={'  '}
                    leadingZero
                    onFinished={this.props.onFinished}
                    format={dateFormat} />

                </strong></div>

    </div>
    )
}

}

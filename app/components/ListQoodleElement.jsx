import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class ListQoodleElement extends Component {

  constructor()
  {
    super();
  }




  static propTypes = {
    id: PropTypes.number.isRequired,
    partecipants: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    closingDate: PropTypes.any.isRequired,
    openIt: PropTypes.func.isRequired
  }






  render()
  {
    const {openIt} = this.props;

    return(
      <div className='box'>
      <i  id='counter'>{this.props.partecipants}</i>
        <div id='lone'>


          </div>


        <h3 id="title">{this.props.title}</h3>
        <p>{this.props.closingDate}</p>
      </div>
);


  }

}

import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';
import CreateTable from "components/create-table"
import ColumnCreationModal from "components/ColumnCreationModal";
/////////////List Actions


export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.state = {
      title: 'Dovrò mettere qui il Title',
      description: '',
      showColumnModal : false,
      columns: [
                {
                  name: 'Name',
                  min: 0,
                  max: 99999,
                  umoption: '',
                  coinoption: '',
                  price: 0,
                  imgUrl: '_assets/img/bana.png'
                },
                {
                  name: 'Number Of Person',
                  min: 0,
                  max: 99999,
                  umoption: '',
                  coinoption: '',
                  price: 0,
                  imgUrl: '_assets/img/redApple.png'
                },
                {
                  name: 'Number of Vegans',
                  min: 0,
                  max: 99999,
                  umoption: '',
                  coinoption: '',
                  price: 0,
                  imgUrl: '_assets/img/kiwi.png'
                }
            ],

    }

  }

  close() {
    this.setState({ showColumnModal: false });
  }

  open() {
  this.setState({ showColumnModal: true });
}


handleOnChangeTitle(e)
{
  this.setState({ title: e.target.value})
}


handleAddColumn(na, mi, ma, um, co)
{
  console.log('OOOOU', this.state.columns.length)
  this.setState({showColumnModal: false});

  let colonna=this.state.columns.concat({
    name: na,
    min: mi,
    max: ma,
    umoption: um,
    coinoption: co
  })

  this.setState({columns: colonna});
}




    render() {
      const title = this.state.title;
      console.log('show nella view',this.state.showColumnModal)
        return (

            <div className="row">
                  <FormGroup className='medium' bsSize="large">
                    <FormControl type="text" placeholder="Title" onChange={ this.handleOnChangeTitle.bind(this)}/>
                  </FormGroup>
                  <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description" />
                  </FormGroup>

                  <Button className="cent" bsStyle="primary"  bsSize="large"  onClick={this.open.bind(this)}>
                    Add column
                     </Button>


                     <CreateTable colonne={this.state.columns} tit={this.state.title}/>





              <ColumnCreationModal onAdd={this.handleAddColumn.bind(this)} show={this.state.showColumnModal}/>
            </div>
        );
    }

}

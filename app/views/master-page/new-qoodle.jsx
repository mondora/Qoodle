import React, {Component} from "react";
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';
import CreateTable from "components/create-table";
import QoodleElement from "components/QoodleElement"
import ColumnCreationModal from "components/ColumnCreationModal";
import InfiniteCalendar from 'react-infinite-calendar';
import SaveModal from 'components/SaveModal';
/////////////List Actions


export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      title: 'Dovrò mettere qui il Title',
      description: '',
      showColumnModal : false,
      showSaveModal: false,
      closingDate: new Date(),
      elements: [
              {
                id:1,
                name: 'Banana',
                min: 0,
                max: 99999,
                umoption: 'kg',
                coinoption: '€',
                price: 1.5,
                counter: 5,
                imgUrl: '_assets/img/bana.png'
              },
              {
                id:2,
                name: 'MelaRossa',
                min: 0,
                max: 99999,
                umoption: 'kg',
                coinoption: '€',
                price: 2,
                counter: 0,
                imgUrl: '_assets/img/redApple.png'
              },
              {
                id:3,
                name: 'Kiwi',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '€',
                price: 3.5,
                counter: 0,
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

  sclose() {
    this.setState({ showSaveModal: false });
  }

  sopen() {
  this.setState({ showSaveModal: true });
  }




handleOnChangeTitle(e)
{
  this.setState({ title: e.target.value})
}


handleAddElement(na, mi, ma, um, pr)
{
  console.log('OOOOU', this.state.elements.length)
  this.setState({showColumnModal: false});

  let element=this.state.elements.concat({
    id:5,
    name: na,
    min: mi,
    max: ma,
    umoption: um,
    coinoption: '€',
    price: pr,
    counter: 0,
    imgUrl: '_assets/img/kiwi.png'
  })

  this.setState({elements: element});
}

  handleModification(newId, na, mi, ma, um, pr)
  {
    var elementi = this.state.elements;

    var target;
    elementi.forEach(function (el, i) {
    console.log(el);
    if (el.id === newId) {
       target = el;

    }
    });
    console.log(target);

    var targetIndex = elementi.indexOf(target);

    elementi[targetIndex] = {
      id: newId,
      name: na,
      min: mi,
      max: ma,
      umoption: um,
      coinoption: '€',
      price: pr,
      counter: 5,
      imgUrl: '_assets/img/redApple.png'
    };

    this.setState({elements: elementi});

  }

  handleSave(date)
  {
    this.setState({showSaveModal: false,
            closingDate: date});
  }



renderQoodleElements () {
  return this.state.elements.map(element => (
    <div className="col">
      <QoodleElement
        counter={element.counter}
        id={element.id}
        imgUrl={element.imgUrl}
        name={element.name}
        coin={element.coinoption}
        price={element.price}
        um={element.umoption}
        create={this.handleModification.bind(this)}
      />
  </div>
  ));
}

    render() {
      const title = this.state.title;
        return (
            <div className="row">

                  <FormGroup className='medium' bsSize="large">
                    <FormControl
                    type="text"
                    placeholder="Title"
                    onChange={ this.handleOnChangeTitle.bind(this)}/>
                  </FormGroup>

                    <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description" />
                  </FormGroup>



                  <Button
                  className="cent"
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.open.bind(this)}>
                    Add Element
                     </Button>



                       <div className="body">
                         <h1 ><center>{this.state.title}</center></h1>
                         <div className="row">
                           {this.renderQoodleElements()}
                         </div>
                      </div>


                      <Button id="saveButton"
                      bsStyle="primary"
                      onClick={this.sopen.bind(this)}
                      >Salva!</Button>




              <ColumnCreationModal
              onAdd={this.handleAddElement.bind(this)}
              show={this.state.showColumnModal}/>

              <SaveModal
              onSave={this.handleSave.bind(this)}
              show={this.state.showSaveModal}/>


            </div>
        );
    }

}

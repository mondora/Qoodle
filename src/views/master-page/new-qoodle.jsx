import React, {Component} from "react";
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement"
import ElementCreationModal from "../../components/ElementCreationModal";
import SaveModal from '../../components/SaveModal';

export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      title: 'Dovrò mettere qui il Title',
      globalId: 0,
      description: '',
      showColumnModal : false,
      showSaveModal: false,
      showModifyModal: false,
      targetId: -1,
      closingDate: new Date(),
      elements: []

    }

  }



  componentDidMount()
  {
    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/create';
    var myInit = {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        };

  fetch(url, myInit)
    .then( function(response) {
      if(response.ok)
      return response.json();
      throw new Error("Network response was not ok")
    })
    .then(function(data) {
        {
          this.setState({
            elements: data,
            globalId: (data.length + 1)
          });}
    }
    .bind(this))
    .catch((error) => { console.error(error); });;

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

handleOnChangeDescription(e)
{
  this.setState( {description: e.target.value})
}

handleAddElement(na, mi, ma, um, pr)
{
    this.setState({showColumnModal: false});



  let element=this.state.elements.concat({
    elId: this.state.globalId,
    name: na,
    min: mi,
    max: ma,
    umoption: um,
    coinoption: '€',
    price: pr,
    counter: 0,
    imgUrl: '_assets/img/kiwi.png'
  })

  this.setState({elements: element,
                globalId: this.state.globalId + 1});
}

  modifyElement(tId)
  {
    if(tId != -1)
    this.setState({showModifyModal: true, targetId: tId});
  }




  handleModification(newId, na, mi, ma, um, pr)
  {
    this.setState({showModifyModal: false});
    var elementi = this.state.elements;

    var target;
    elementi.forEach(function (el) {
        if (el.elId === newId) {
       target = el;

    }
    });

    if(na == '')   na = target.name;
    if(mi == '')   mi = target.min;
    if(ma == '')   ma = target.max;
    if(pr == '')   pr = target.price;

    var targetIndex = elementi.indexOf(target);
    if(targetIndex != -1)
    elementi[targetIndex] = {
      elId: newId,
      name: na,
      min: mi,
      max: ma,
      umoption: um,
      coinoption: '€',
      price: pr,
      counter: 0,
      imgUrl: '_assets/img/redApple.png'
    }

    this.setState({elements: elementi, targetId: -1});

  }

  handleSave(date)
  {

    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodles';
    var myInit = {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(
        {
          title : this.state.title,
          description : this.state.description,
          closingDate : date,
          qeList : this.state.elements
        })
    };


    fetch(url, myInit)
    .then( function(response) {
      if(!response.ok)
      throw new Error("Network response was not ok")
    });

    this.setState({showSaveModal: false,
            closingDate: date});
  }



renderQoodleElements () {
  return this.state.elements.map(element => (
    <div className="col" key ={element.elId.toString()}>
      <QoodleElement
        counter={element.counter}
        elId={element.elId}
        imgUrl={element.imgUrl}
        name={element.name}
        coin={element.coinoption}
        price={Number (element.price)}
        um={element.umoption}
        create={() => this.modifyElement(element.elId)}
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
                    onChange={ this.handleOnChangeTitle.bind(this)} maxLength={30}/>
                  </FormGroup>

                    <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description"
                      maxLength={80}
                      onChange = {this.handleOnChangeDescription.bind(this)} />
                  </FormGroup>



                  <Button
                  className="cent"
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.open.bind(this)}>
                    Add Element
                     </Button>



                       <div className="body">
                         <center><h1 id="create">{this.state.title}</h1></center>
                         <div className="row">
                           {this.renderQoodleElements()}
                         </div>
                      </div>


              <Button id="saveButton"
              bsStyle="primary"
              onClick={this.sopen.bind(this)}
              >Salva!</Button>




              <ElementCreationModal
              onAdd={this.handleAddElement.bind(this)}
              show={this.state.showColumnModal}
              targetId={this.state.targetId}/>

              <SaveModal
              onSave={this.handleSave.bind(this)}
              show={this.state.showSaveModal}/>


            <ElementCreationModal
              onAdd={this.handleModification.bind(this)}
              show={this.state.showModifyModal}
              targetId={this.state.targetId}/>


            </div>
        );
    }

}

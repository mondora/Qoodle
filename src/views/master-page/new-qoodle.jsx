import React, {Component} from "react";
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement"
import ElementCreationModal from "../../components/ElementCreationModal";
import SaveModal from '../../components/SaveModal';
import InfoModal from '../../components/InfoModal';
import kiwi from '../../assets/img/kiwi.png';
import redApple from '../../assets/img/redApple.png';

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
      showInfoModal: false,
      showModifyModal: false,
      targetId: -1,
      closingDate: new Date(),
      backgroundImage: "",
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
    .then(function(data)
        {
          this.setState({
            elements: data,
            globalId: (data.length + 1)
          });
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

handleAddElement(na, mi, ma, um, pr, img64)
{
    this.setState({showColumnModal: false});

    console.log("guarda lurl", img64);




  let element=this.state.elements.concat({
    elId: this.state.globalId,
    name: na,
    min: mi,
    max: ma,
    umoption: um,
    coinoption: '€',
    price: pr,
    counter: 0,
    img64: img64
  })


  this.setState({elements: element,
                globalId: this.state.globalId + 1});


}

  modifyElement(tId)
  {
    if(tId !== -1)
    this.setState({showModifyModal: true, targetId: tId});
  }

  handleBackgroundImageChange(e)
  {

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        backgroundImage: reader.result
      });
    }

      reader.readAsDataURL(file)
  }


  handleModification(newId, na, mi, ma, um, pr, img64)
  {
    this.setState({showModifyModal: false});
    var elementi = this.state.elements;

    var target;
    elementi.forEach(function (el) {
        if (el.elId === newId) {
       target = el;

    }
    });

    if(na === '')   na = target.name;
    if(mi === '')   mi = target.min;
    if(ma === '')   ma = target.max;
    if(pr === '')   pr = target.price;
    if(img64 === '') img64 = target.img64;

    var targetIndex = elementi.indexOf(target);
    if(targetIndex !== -1)
    elementi[targetIndex] = {
      elId: newId,
      name: na,
      min: mi,
      max: ma,
      umoption: um,
      coinoption: '€',
      price: pr,
      counter: 0,
      img64: img64
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
          qeList : this.state.elements,
          backgroundImage: this.state.backgroundImage
        })
    };


    fetch(url, myInit)
    .then( function(response) {
      if(!response.ok)
      throw new Error("Network response was not ok")
    });

    this.setState({showSaveModal: false,
                  showInfoModal: true,
                  closingDate: date
                  });


  }


  showInfoModal()
  {
    this.setState({showInfoModal: false});
    window.location = "#/qoodles";
  }



renderQoodleElements () {
  return this.state.elements.map(element => (
    <div className="col" key={element.elId.toString()}>
      <QoodleElement
        counter={element.counter}
        elId={element.elId}
        img64={element.img64}
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
        return (
            <div className="row">

                  <FormGroup className='medium' bsSize="large">
                    <FormControl
                    type="text"
                    placeholder="Title"
                    onChange={ this.handleOnChangeTitle.bind(this)} maxLength={25}/>
                  </FormGroup>

                    <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description"
                      maxLength={80}
                      onChange={this.handleOnChangeDescription.bind(this)} />
                  </FormGroup>

                  <FormGroup >
                    <h3 id="labelinsertImage"> Sfondo del Qoodle: </h3>
                    <FormControl  id="insertImage" onChange={this.handleBackgroundImageChange.bind(this)} type="file" placeholder="sfoglia"/>
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

              <InfoModal
                show={this.state.showInfoModal}
                title="Salvataggio"
                info={"Salvataggio del Qoodle ( " +  this.state.title   + " ) effettuato correttamente"}
                showInfoModal={this.showInfoModal.bind(this)}/>

            </div>
        );
    }

}

import React, {Component} from "react";
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import QoodleElement from "../../components/QoodleElement"
import ElementCreationModal from "../../components/ElementCreationModal";
import SaveModal from '../../components/SaveModal';
import SimpleChoiceModal from '../../components/SimpleChoiceModal';


export default class NewQoodle extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      title: 'Inserisci titolo',
      globalId: 0,
      description: '',
      showColumnModal : false,
      showSaveModal: false,
      showInfoModal: false,
      showErrorInfoModal: false,
      showModifyModal: false,
      targetId: -1,
      closingDate: new Date(),
      backgroundImage: "",
      elements: [],
      type: "generic",
      showSimpleChoiceModal: true,

    }

  }



  componentDidMount()
  {

    var token="";
    var client="";
    var email="";


    if (typeof(Storage) !== "undefined")
    {
      token = sessionStorage.getItem("Idtoken");
      client = sessionStorage.getItem("IdClient");
      email = sessionStorage.getItem("email");
    }

        var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/create';
        var myInit = {
              method: 'get',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'id_token': token,
                'id_client': client,
                'email': email
              },
            };


        fetch(url, myInit)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error('Ooops...something went wrong.');
          }
          })
          .then((data =>
              data.forEach( (ele)=>
              {
                this.setState({
                  elements: data,
                  globalId: (data.length + 1)
                });
              })
          ))
          .catch((error) => {
            alert("Non puoi vedere la lista dei qoodle.");
            console.error(error);
            window.location = "/";
            });





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




    um = this.state.type === "dem" ? "vote" : "";



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

    um = this.state.type === "dem" ? "vote" : "";


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
    var token = sessionStorage.getItem("Idtoken");
    var client = sessionStorage.getItem("IdClient");
    var email = sessionStorage.getItem("email");


    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodles';
    var myInit = {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'id_token': token,
        'id_client': client,
        'email': email
      },
      body: JSON.stringify(
        {
          title : this.state.title,
          description : this.state.description,
          closingDate : date,
          qeList : this.state.elements,
          backgroundImage: this.state.backgroundImage,
          type: this.state.type,
          owner: email,
        })
    };


    fetch(url, myInit)
    .then( (response => {
        this.setState({showSaveModal: false,
                closingDate: date});
    window.location = "#/qoodles";

      if(response.ok){
          alert("Qoodle creato correttamente");
      }
      else {
        throw new Error("Network response was not ok");
      }
  }))
  .catch(error => {
      console.error(error);
      alert("Il Qoodle non è stato creato correttamente.");
  });

  }




  chooseT(t)
  {
    this.setState({type: t,
      showSimpleChoiceModal: false});
  }

  closeSimpleChoice()
  {
    this.setState({showSimpleChoiceModal: false});
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
          <div className="body">
            <h1 className="titlePage">Creazione nuovo Qoodle</h1>

            <div className="row">

                  <FormGroup className='medium' bsSize="large">
                    <FormControl
                    type="text"
                    placeholder="Title"
                    onChange={ this.handleOnChangeTitle.bind(this)} maxLength={20}/>
                  </FormGroup>

                    <FormGroup className='medium'>
                    <FormControl type="text" placeholder="Description"
                      maxLength={150}
                      onChange={this.handleOnChangeDescription.bind(this)} />
                  </FormGroup>

                  <FormGroup id="padInsertImage">
                    <h3 id="labelinsertImage"> Sfondo del Qoodle: </h3>
                      <FormControl  id="insertImage" onChange={this.handleBackgroundImageChange.bind(this)} type="file" placeholder="sfoglia"/>
                </FormGroup>



                  <Button
                  id="addButton"
                  className="cent"
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.open.bind(this)}>
                    Add Element
                     </Button>


                         <center><h1 id="create">{this.state.title}</h1></center>
                         <div className="row">
                           {this.renderQoodleElements()}
                         </div>

                         <center>
              <Button
              id="saveButton"
              onClick={this.sopen.bind(this)}
              >Salva!</Button>
              </center>



              <ElementCreationModal
              onAdd={this.handleAddElement.bind(this)}
              show={this.state.showColumnModal}
              targetId={this.state.targetId}
              type={this.state.type}/>

              <SaveModal
              onSave={this.handleSave.bind(this)}
              show={this.state.showSaveModal}/>


            <ElementCreationModal
              onAdd={this.handleModification.bind(this)}
              show={this.state.showModifyModal}
              targetId={this.state.targetId}
              type={this.state.type}/>


              <SimpleChoiceModal
              show={this.state.showSimpleChoiceModal}
              choose={this.chooseT.bind(this)}
              close={this.closeSimpleChoice.bind(this)}/>

            </div>
          </div>
        );
    }

}

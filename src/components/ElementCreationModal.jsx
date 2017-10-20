import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal,  InputGroup, ListGroupItem, ListGroup} from 'react-bootstrap';



export default class ElementCreationModal extends Component {

    constructor (props) {


        super(props);

          this.state = {
            name: '',
            min: 0,
            max: 99999,
            umoption: "",
            coinoption: '€',
            price: 0,
            img64: '',
            showAlert: false,
        };
    }



    static propTypes = {
        onAdd: PropTypes.func.isRequired,
        show: PropTypes.bool,
        targetId: PropTypes.number,
        type: PropTypes.string,
    }


    handleNameChange(nome)
    {
      this.setState({name : nome.target.value});
    }

    handleMinChange(mi)
    {
      if(Number(mi.target.value) >= 0)
        this.setState({min: mi.target.value});
      else
        alert("non puoi inserire numeri negativi");

    }


    handleMaxChange(ma)
    {
      if(Number(ma.target.value) >= 0)
        this.setState({max: ma.target.value});
      else
        alert("non puoi inserire numeri negativi");
    }

    handleUMChange(um)
    {
      this.setState({umoption : um.target.value});
    }

    handleCoinChange(coin)
    {
      this.setState({coinoption : coin.target.value});
    }

    handlePriceChange(pr)
    {
      if(Number(pr.target.value) >= 0)
        this.setState({price : pr.target.value});
      else
        alert("il prezzo deve essere un numero positivo");
    }



    handleClick()
    {
      this.props.onAdd(this.state.name,
        this.state.min,
        this.state.max,
        this.state.umoption,
        this.state.price,
        this.state.img64);

      this.setState({    name: '',
          min: 0,
          max: 99999,
          umoption: '',
          coinoption: '€',
          price: 0,
          showAlert: false,
          img64: ''});

    }


    handleImageChange(e)
    {

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          img64: reader.result
        });
      }

        reader.readAsDataURL(file)
    }


    renderAlert()
    {
      if(Number(this.state.max) < Number(this.state.min)){
        return(
        <ListGroup>
          <ListGroupItem id="minMax" bsStyle="danger">Il minimo impostato deve essere minore del massimo</ListGroupItem>
        </ListGroup>);
      }
    }



    renderUmEPrice(){
      const coinoption = this.state.coinoption;
      const price = this.state.price;

      if(this.props.type !== "dem")
      return(   <div>
        <FormGroup>
        <label>select Unit of measure</label>
        <FormControl componentClass="select" id="um" onChange={this.handleUMChange.bind(this)} placeholder="select">
          <option value="">Whitout unit of measure</option>
          <option value="kg">Kilograms</option>
          <option value="m">Meter</option>
          <option value="bott">Bottles</option>
        </FormControl>
      </FormGroup>

        <FormGroup>
        <label>select price relative of Measure Unit</label>

          <InputGroup onChange={this.handlePriceChange.bind(this)} >
          <FormControl type="number" min={0} maxLength={15} value={price}/>
          <InputGroup.Addon>{coinoption}</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
    </div>);

}

    render () {
        const {onAdd} = this.props;
        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const umoption = this.state.umoption;
        const img64= this.state.img64;

        var bottone;



        if (this.props.targetId === -1) {
          bottone = <Button onClick={this.handleClick.bind(this)}>{"Aggiungi"}</Button>;

        } else {
          bottone = <Button onClick={() => onAdd(this.props.targetId, name, min, max, umoption, this.state.price,  img64)}>{"Modifica"}</Button>

        }



        return (

              <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.targetId === -1 ? "Nuovo Elemento": "Modifica Elemento"}</Modal.Title>
                  </Modal.Header>
                <Modal.Body>
                        <FormGroup>
                            <FormControl onChange={this.handleNameChange.bind(this)} type="text" placeholder="Nome" maxLength={25} value={name}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMinChange.bind(this)} type="number" placeholder="Min" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMaxChange.bind(this)} type="number" placeholder="Max" />
                        </FormGroup>





                        {this.renderAlert()}


                        {this.renderUmEPrice()}






                  <FormGroup>
                    <FormControl  onChange={this.handleImageChange.bind(this)} type="file" placeholder="sfoglia"/>
                  </FormGroup>


                </Modal.Body>
                <Modal.Footer>
                  {bottone}
                </Modal.Footer>
            </Modal>
        )
    }

}

ElementCreationModal.defaultProps = {
  show : false,
  coinoption: '€',
  targetId: -1
};

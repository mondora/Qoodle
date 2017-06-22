import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal, Checkbox, InputGroup, ListGroupItem, ListGroup} from 'react-bootstrap';



export default class ColumnCreationModal extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            min: 0,
            max: 99999,
            umoption: '',
            coinoption: '€',
            price: 0,
            showAlert: false

        };
    }


    static propTypes = {
        onAdd: PropTypes.func.isRequired,
        targetId: PropTypes.number
    }

    handleNameChange(nome)
    {
      this.setState({name : nome.target.value});
    }

    handleMinChange(mi)
    {
      if(this.state.max <= mi.target.value)
        this.setState({showAlert: true,
                min : mi.target.value });
      else
      this.setState({showAlert: false,
              min: mi.target.value });
    }


    handleMaxChange(ma)
    {
      console.log("GUARDA CHE QUI DOVREBBE ALL'INIZIO ESSERE FALSO", this.state.min > ma.target.value)
      if(this.state.min > ma.target.value)
        this.setState({showAlert: true,
                max : ma.target.value });
      else{
      this.setState({showAlert: false,
              max : ma.target.value });
      }
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
      this.setState({price : pr.target.value});
    }


    renderAlert()
    {

      if(this.state.showAlert){
        return(
        <ListGroup>
          <ListGroupItem bsStyle="danger">Il minimo impostato deve essere minore del massimo</ListGroupItem>
        </ListGroup>);
      }
    }


    render () {
        const {onAdd} = this.props;
        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const umoption = this.state.umoption;
        const coinoption = this.state.coinoption;
        const price = this.state.price;

        var bottone;

        if (this.props.targetId === -1) {
          bottone = <Button onClick={() => onAdd(name, min, max, umoption, price)}>{"Aggiungi"}</Button>
        } else {
          bottone = <Button onClick={() => onAdd(this.props.targetId, name, min, max, umoption, price)}>{"Aggiungi"}</Button>

        }



        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>{"Nuova colonna"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <FormGroup>
                            <FormControl onChange={this.handleNameChange.bind(this)} type="text" placeholder="Nome" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMinChange.bind(this)} type="number" placeholder="Min" min={0}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMaxChange.bind(this)} type="number" placeholder="Max" min={0}/>
                        </FormGroup>


                        {this.renderAlert()}


                        <FormGroup>
                        <label>select Unit of measure</label>
                        <FormControl componentClass="select" id="um" onChange={this.handleUMChange.bind(this)} placeholder="select">
                          <option value="wui">Whitout unit of measure</option>
                          <option value="kg">Kilograms</option>
                          <option value="m">Meter</option>
                          <option value="bott">Bottles</option>
                        </FormControl>
                      </FormGroup>

                      <FormGroup>
                      <label>select price relative of Measure Unit</label>




                        <InputGroup onChange={this.handlePriceChange.bind(this)} >
                          <FormControl type="number" min={0}/>
                          <InputGroup.Addon>{coinoption}</InputGroup.Addon>
                        </InputGroup>

                    </FormGroup>





                </Modal.Body>
                <Modal.Footer>
                  {bottone}
                </Modal.Footer>
            </Modal>
        )
    }

}

ColumnCreationModal.defaultProps = {
  show : false,
  coinoption: '€',
  targetId: -1
};

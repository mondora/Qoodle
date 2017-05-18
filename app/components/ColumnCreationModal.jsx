import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal, Checkbox, InputGroup} from 'react-bootstrap';

export default class ColumnCreationModal extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            min: 0,
            max: 99999,
            umoption: '',
            coinoption: '€',
            price: 0

        };
    }


    handleNameChange(nome)
    {
      this.setState({name : nome.target.value});
    }

    handleMinChange(mi)
    {
      this.setState({min : mi.target.value});
    }


    handleMaxChange(ma)
    {
      this.setState({max : ma.target.value});
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


    render () {
        const {onAdd} = this.props;
        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const umoption = this.state.umoption;
        const coinoption = this.state.coinoption;
        const price = this.state.price;

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
                          <FormControl type="number" />
                          <InputGroup.Addon>{coinoption}</InputGroup.Addon>
                        </InputGroup>



                    </FormGroup>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onAdd(name, min, max, umoption, price)}>{"Aggiungi"}</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

ColumnCreationModal.defaultProps = {
  show : false
};

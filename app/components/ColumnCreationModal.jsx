import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal, Checkbox} from 'react-bootstrap';

export default class ColumnCreationModal extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            min: 0,
            max: 99999,
            umoption: '',
            coinoption: ''

        };
    }

    static propTypes = {
        onAdd: PropTypes.func.isRequired
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



    render () {
        const {onAdd} = this.props;
        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const umoption = this.state.umoption;
        const coinoption = this.state.coinoption;

        console.log(umoption);
        console.log(name);
        console.log(coinoption);

        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{"Nuova colonna"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <FormControl onChange={this.handleNameChange.bind(this)} type="text" placeholder="Nome" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMinChange.bind(this)} type="number" placeholder="Min" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl onChange={this.handleMaxChange.bind(this)} type="number" placeholder="Max" />
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
                      <label>select type of coin(if you need it)</label>
                      <FormControl componentClass="select" id="coin"  onChange={this.handleCoinChange.bind(this)} placeholder="select coin">
                        <option value="empty"></option>
                        <option value="dollars">$</option>
                        <option value="euro">€</option>
                      </FormControl>
                    </FormGroup>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onAdd(name, min, max, umoption, coinoption)}>{"Aggiungi"}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }

}

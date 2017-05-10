import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal} from 'react-bootstrap';

export default class ColumnCreationModal extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            min: 0,
            max: 99999,
            option: ''

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

    render () {
        const {onAdd} = this.props;
        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const option = this.state.option;

        console.log(name);
        console.log(min);

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
                        <FormControl componentClass="select" placeholder="select">
                          <option value="wui">Whitout unit of measure</option>
                          <option value="kg">Kilograms</option>
                          <option value="m">Meter</option>
                          <option value="bott">Bottles</option>
                        </FormControl>
                      </FormGroup>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onAdd(name, min, max)}>{"Aggiungi"}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }

}

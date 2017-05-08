import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, Modal} from 'react-bootstrap';

export default class ColumnCreationModal extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            min: 0
        };
    }

    static propTypes = {
        onAdd: PropTypes.func.isRequired
    }

    render () {
        const {onAdd} = this.props;
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{"Nuova colonna"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Nome" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="number" placeholder="Min" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="number" placeholder="Max" />
                        </FormGroup>
                        <FormGroup>
                        <FormControl componentClass="select" multiple>
                          <option value="select">
                            select (multiple)
                          </option>
                          <option value="kg">kilograms</option>
                          <option value="m">meter</option>
                          <option value="bott">bottles</option>
                        </FormControl>
                      </FormGroup>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onAdd}>{"Aggiungi"}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }

}

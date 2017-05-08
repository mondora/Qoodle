import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ColumnCreationModal from 'components/ColumnCreationModal';

chai.use(sinonChai);

describe('ColumnCreationModal', () => {

    it('renders an input box for column name', () => {
        const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
        expect(
            element.find(FormControl).findWhere(n => n.prop('placeholder') === 'Nome')
        ).to.have.length(1);
    });

    it('renders an input box for column min', () => {
        const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
        expect(
            element.find(FormControl).findWhere(n => n.prop('placeholder') === 'Min')
        ).to.have.length(1);
    });

    describe('when user clicks on add button', () => {

        it('calls onAdd function', () => {
            const onAdd = sinon.spy();
            const element = shallow(<ColumnCreationModal onAdd={onAdd} />);
            element.find(Button).simulate('click');
            expect(onAdd).has.callCount(1);
        });

    });

    it('sets name in state as empty string', () => {
        const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
        expect(element.state('name')).to.be.equal('');
    });

    it('sets name in state as empty string', () => {
        const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
        expect(element.state('name')).to.be.equal('');
    });

});
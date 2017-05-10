import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ColumnCreationModal from 'components/ColumnCreationModal';

chai.use(sinonChai);

describe('ColumnCreationModal', () => {

  //renderizzo per finta la modale e ci attacco una funzione spia
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

    it('renders an input box for column Max', () =>
    {
      //mi creo l'elemento, ricorda che qui shallow è come per instanziare loggetto
      const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
      expect(
        element.find(FormControl).findWhere(n => n.prop('placeholder') === 'Max' )
    ).to.length(1);

      expect(element.find(FormControl).findWhere(n => n.prop('type') === 'number')
    ).to.length(2);

  });

    it('check the length of input', () =>
    {//so di avere 4 input
      const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);

      expect(element.find(FormControl)).to.length(5);

    });

    it('renders a select box for unit of measure', () =>{
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
    expect(element.find(FormControl).findWhere(n => n.prop('componentClass') === 'select')
  ).to.length(2);
    });

    it('renders all option', () =>
    {
      const element = shallow (<ColumnCreationModal onAdd={sinon.spy()} />);
      expect(element.find(FormControl).find('option')).to.length(7);
      //modo brutto di controllare quante option ci sono.
  });



  describe('when user clicks on add button', () => {

  it('calls onAdd function providing name and min values', () => {
      const onAdd = sinon.spy();
      const element = shallow(<ColumnCreationModal onAdd={onAdd} />);

      element
          .find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Nome')
          .simulate('change', {target: {value: 'name value'}});
      element
          .find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Min')
          .simulate('change', {target: {value: 'min value'}});

      element
          .find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Max')
          .simulate('change', {target: {value: 'max value'}});

      element
          .find(FormControl)
          .findWhere(n => n.prop('id') === 'um')
          .simulate('change', {target: {value: 'um value'}});

      element
          .find(FormControl)
          .findWhere(n => n.prop('id') === 'coin')
          .simulate('change', {target: {value: 'coin value'}})

      element.find(Button).simulate('click');
      expect(onAdd).has.been.calledWith('name value', 'min value', 'max value');
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

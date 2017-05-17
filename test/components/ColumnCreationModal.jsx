import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ColumnCreationModal from 'components/ColumnCreationModal';

chai.use(sinonChai);

describe('ColumnCreationModal', () => {

  it('check input default vaule',() =>{
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
    expect(element.state('name')).to.be.empty;
    expect(element.state('min')).to.be.equal(0);
    expect(element.state('max')).to.be.equal(99999);
    expect(element.state('umoption')).to.be.empty;
    expect(element.state('coinoption')).to.be.empty;

  });

  it('check show props', () =>
  {
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} show={false}/>);
    expect(element.instance().props.show).to.be.false;

  });

  it('check show default value', () =>
  {
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
    expect(element.instance().props.show).to.be.false;

  });

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


    it('calls onAdd function providing name, min, max, um and coin values', () => {
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
      expect(onAdd).has.been.calledWith('name value', 'min value', 'max value', 'um value', 'coin value');

  });

  

  it('sets name in state as empty string', () => {
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
    expect(element.state('name')).to.be.equal('');
});

it('sets min in state as 0 string', () => {
    const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
    expect(element.state('min')).to.be.equal(0);
});


    it('calls onAdd function providing new name value', () => {
      const onAdd = sinon.spy();
      const element = shallow(<ColumnCreationModal onAdd={onAdd} />);

      element
      .find(FormControl)
      .findWhere(n => n.prop('placeholder') === 'Nome')
      .simulate('change', {target: {value: 'Pere'}});

      element.find(Button).simulate('click');

      //se non simulo il change, la funzione viene chiamata con i valori di default dello stato(specificato questo nel componente)
      expect(onAdd).has.been.calledWith('Pere', 0, 99999, '', '');

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

    describe('when users changes \'name\' input', () => {

        it('changes name value in state', () => {
            const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
            element
                .find(FormControl)
                .findWhere(n => n.prop('placeholder') === 'Nome')
                .simulate('change', {target: {value: 'this is a new value'}});
            expect(element.state('name')).to.be.equal('this is a new value');
        });

    });

    describe('when users changes \'min\' input', () => {

        it('changes min value in state', () => {
            const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
            element
                .find(FormControl)
                .findWhere(n => n.prop('placeholder') === 'Min')
                .simulate('change', {target: {value: 'this is a new value'}});
                //faccio un check dello state
            expect(element.state('min')).to.be.equal('this is a new value');
        });

    });

    describe('when users changes \'max\' input', () => {

        it('changes max value in state', () => {
            const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
            element
                .find(FormControl)
                .findWhere(n => n.prop('placeholder') === 'Max')
                .simulate('change', {target: {value: 8}});
                //faccio un check dello state
            expect(element.state('max')).to.be.equal(8);
        });

    });

    describe('when users changes \'umoption\' input', () => {

        it('changes umoption value in state', () => {
            const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
            element
                .find(FormControl)
                .findWhere(n => n.prop('id') === 'um')
                .simulate('change', {target: {value: 'kg'}});
                //faccio un check dello state
            expect(element.state('umoption')).to.be.equal('kg');
        });

    });

    describe('when users changes \'coinoption\' input', () => {

        it('changes coinoption value in state', () => {
            const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
            element
                .find(FormControl)
                .findWhere(n => n.prop('id') === 'coin')
                .simulate('change', {target: {value: 'dollars'}});
                //faccio un check dello state
            expect(element.state('coinoption')).to.be.equal('dollars');
        });

    });





});

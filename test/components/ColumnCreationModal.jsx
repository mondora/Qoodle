import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, InputGroup, ListGroupItem, ListrGroup} from 'react-bootstrap';
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




  });
it('renders an 3 FormControl of type number', () =>
  {
  const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);
  expect(element.find(FormControl).findWhere(n => n.prop('type') === 'number')
).to.length(3);

  expect(element.find(InputGroup)).to.length(1);


  });

    it('check the length of input', () =>
    {//so di avere 4 input
      const element = shallow(<ColumnCreationModal onAdd={sinon.spy()} />);

      expect(element.find(FormControl)).to.length(5);

    });


    it('renders all option', () =>
    {
      const element = shallow (<ColumnCreationModal onAdd={sinon.spy()} />);
      expect(element.find(FormControl).find('option')).to.length(4);
      //modo brutto di controllare quante option ci sono.
  });



  describe('when user clicks on add button', () => {


    it('calls onAdd function providing name, min, max, um', () => {
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
            .find(InputGroup)
            .simulate('change', {target: {value: 'price value'}});



      element.find(Button).simulate('click');
      expect(onAdd).has.been.calledWith('name value', 'min value', 'max value', 'um value', 'price value');

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
      expect(onAdd).has.been.calledWith('Pere', 0, 99999, '');

    });




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

    describe('when user clicks on add button with wrong parameters', () => {


      it('dont calls onAdd function but render an error message', () => {
        const onAdd = sinon.spy();
        const element = shallow(<ColumnCreationModal onAdd={onAdd} />);

        const wrongMin = 6;
        const wrongMax = 5;

        element
            .find(FormControl)
            .findWhere(n => n.prop('placeholder') === 'Nome')
            .simulate('change', {target: {value: 'name value'}});
        element
            .find(FormControl)
            .findWhere(n => n.prop('placeholder') === 'Min')
            .simulate('change', {target: {value: 'min value'}});
//ho impostato il minimo a un valore maggiore del massimo => render error
        element
            .find(FormControl)
            .findWhere(n => n.prop('placeholder') === 'Max')
            .simulate('change', {target: {value: 'max value'}});


        element
            .find(FormControl)
            .findWhere(n => n.prop('id') === 'um')
            .simulate('change', {target: {value: 'um value'}});

          element
              .find(InputGroup)
              .simulate('change', {target: {value: -4}});


        expect(
          element
          .find(ListrGroup)
          .findWhere(n => n.prop('bsStyle') === 'danger').text()
        ).to.be.equal('Il minimo impostato deve essere minore del massimo');
    });

    });



});

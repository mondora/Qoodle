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


    })


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



    var assert = require('assert');
    describe('Array', function() {
      describe('#indxOf()', function() {
        it('should return -1 when the value is not present', function() {
          assert.equal(-1, [1,2,3].indexOf(4));
          assert.equal(2, [1,2,3].indexOf(3));

          assert('foo' !== 'bar', 'foo is not bar');
          assert(Array.isArray([]), 'empty arrays are arrays');
assert.equal(3, '3', '== coerces values to strings');//funziona bene! non confronta il tipo , come ==


        });
      });
    });



    var vett = [1,7,8];
    describe('test equal', () =>
    {
      it('eql fa check contenuto, l"altro indirizzo', () =>{
        expect([1,2,3]).to.be.eql([1,2,3]);
        expect(vett).to.be.eql([1,7,8]);

        expect(vett).to.not.be.equal([1,7,8]);
        var ore = vett;
        expect(ore).to.be.equal(vett);
        expect(vett).to.be.equal(vett);


      });
    });

    describe('test keys', () =>
    {
      if('giusto',() =>
      {
        expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
        expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'fooffds']);
      });

    } );





});

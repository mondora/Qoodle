import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import InfiniteCalendar from 'react-infinite-calendar';
import SaveModal from 'components/SaveModal';

chai.use(sinonChai);

describe('ColumnCreationModal', () => {




  //renderizzo per finta la modale e ci attacco una funzione spia
    it('renders an InfiniteCalendar', () => {
        const element = shallow(<SaveModal onSave={sinon.spy()} />);
        expect( element.find(InfiniteCalendar) ).to.have.length(1);
    });

    it('renders a save Button', () => {
        const element = shallow(<SaveModal onSave={sinon.spy()} />);
        expect( element.find(Button) ).to.have.length(1);
        expect( element.find(Button).children().text() ).to.be.equal("Salva il Qoodle");
    });

  describe('when user clicks on save button', () => {

    it('change show props after click save', () => {
        const onSave = sinon.spy()
        const element = shallow(<SaveModal onSave={onSave} show={true}/>);

        expect( element.prop('show') ).to.be.true;

        element.find(Button).simulate('click');

        expect(onSave).to.have.callCount(1);


    });
  });



});

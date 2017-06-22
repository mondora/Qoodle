import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import CreateTable from 'components/create-table'
import NewQoodle from 'views/master-page/new-qoodle';
import QoodleElement from 'components/QoodleElement'
import ColumnCreationModal from 'components/ColumnCreationModal'

chai.use(sinonChai);

describe('NewQoodle', () => {

  it('check state default value of Modal',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('showColumnModal')).to.be.false;

  });



  it('render 3 elements from state',() =>{

    const element = shallow(<NewQoodle />)

    expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);

  });



  it('set state providing new title', () =>
  {

    const handleOnChangeTitle = sinon.spy();
    const element = shallow(<NewQoodle onAdd={handleOnChangeTitle} />);



    element
        .find(FormControl)
        .findWhere(n => n.prop('placeholder') === 'Title')
        .simulate('change', {target: {value: 'titlevalue'}});

    expect(element.state('title')).to.be.equal('titlevalue');

  });



  it('renders an input box fot Title', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Title')
      ).to.have.length(1);
  });

  it('renders an input box for Description', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Description')
      ).to.have.length(1);
  });


  it('renders 2 button to add Column, and to save qoodle', () =>
  {
      const element = shallow (<NewQoodle />);
      expect(
          element.find(Button)).to.have.length(2);
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);

      expect(element.find(Button).findWhere(n => n.prop('id') == 'saveButton').children().text())
      .to.be.equal('Salva!');
  });


  it('calls open function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    element.find('.cent').simulate('click');

    expect(element.state('showColumnModal')).to.be.true
  });

  it('change states when calls modifyElement', () =>
  {
    const element = shallow(<NewQoodle />);
    expect(element.state('showModifyModal')).to.be.false;

    element.instance().modifyElement(2);

    expect(element.state('showModifyModal')).to.be.true;


  });


  it('calls open4Save function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    expect(element.state('showSaveModal')).to.be.false;

    element.find('#saveButton').simulate('click');
    expect(element.state('showSaveModal')).to.be.true;
  });



  describe('update state when calls addNewColumn()', () => {

    it('increment number of columns', () =>
    {
      const element = shallow(<NewQoodle />);
      const oldNrElements = element.state('elements').length;
      element.instance().handleAddElement('Name',
      1,
      12435,
      'um',
      9);
      expect(element.state('elements').length).to.be.equal(oldNrElements + 1);

  });

  it('call of handleAddElement have the correct parameters', () =>
  {
    const element = shallow(<NewQoodle />);
    const oldNrColumns = element.state('elements').length;
    element.instance().handleAddElement = sinon.spy();
    element.instance().handleAddElement('Name',
    1,
    12435,
    'um',
    1.8);

    expect(element.instance().handleAddElement).calledWith('Name',
    1,
    12435,
    'um',
    1.8);

});


  it('changes value of showColumnModal over the time', () =>
  {
    const element = shallow(<NewQoodle />);
    expect(element.state('showColumnModal')).to.be.false;
    element.find('.cent').simulate('click');
    expect(element.state('showColumnModal')).to.be.true;
    element.instance().handleAddElement('Name',
    1,
    12435,
    'um',
    20);
    expect(element.state('showColumnModal')).to.be.false;



  });

  });

  describe('update state when calls handleModification()', () => {

    it('modify state with correct parameters', () =>
    {
      const element = shallow(<NewQoodle />);

      element.instance().handleModification(2, 'pere', 4, 8, 'kg', 3.4);
      var target;
      var targetIndex= -1;
      var i = 1;

      var elements = element.instance().state.elements;

//codice brutto!!
  elements.forEach(function (el, i) {
  console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',el);
  if (el.id === 2) {
     target = el;
     targetIndex=i;
  }
  i++;
  });


        expect(
          element.instance().state.elements[targetIndex]
        ).to.be.eql(
          {
            id:2,
            name: 'pere',
            min: 4,
            max: 8,
            umoption: 'kg',
            coinoption: '€',
            price: 3.4,
            counter: 5,
            imgUrl: '_assets/img/redApple.png'
          }
        )



    });


    it('show modifymodal when call modifyElement', () =>
    {
      const element = shallow(<NewQoodle />);

      expect(element.state('showModifyModal')).to.be.false;

      element.instance().modifyElement();

      expect(element.state('showModifyModal')).to.be.true;




    });


  });



  describe('update state when calls handleSave()', () => {

    it('change closingDate into a specific Date', () =>
    {
      const element = shallow(<NewQoodle />);

      element.instance().handleSave(new Date('June 22, 2017 11:13:00'));

      expect(element.state('closingDate')).to.be.eql(new Date('June 22, 2017 11:13:00'));

    });
  });

});

import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import NewQoodle from 'views/master-page/new-qoodle';
import QoodleElement from 'components/QoodleElement'
import ElementCreationModal from 'components/ElementCreationModal'

chai.use(sinonChai);

describe('NewQoodle', () => {

  var elementi = [
          {
            id:1,
            name: 'Banana',
            min: 0,
            max: 99999,
            umoption: 'kg',
            coinoption: '€',
            price: 3.5,
            counter: 5,
            imgUrl: '_assets/img/bana.png'
          },
          {
            id:2,
            name: 'intolleranti al lattosio',
            min: 0,
            max: 99999,
            umoption: 'kg',
            coinoption: '€',
            price: 0,
            counter: 0,
            imgUrl: '_assets/img/redApple.png'
          },
          {
            id:3,
            name: 'celiaci',
            min: 0,
            max: 99999,
            umoption: '',
            coinoption: '',
            price: 0,
            counter: 0,
            imgUrl: '_assets/img/kiwi.png'
          }
        ];


  it('check state default value of Modal',(done) =>{

    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});
    expect(element.state('showColumnModal')).to.be.false;
    done();
  });



  it('render 3 elements from state',(done) =>{

    const element = shallow(<NewQoodle />)
    element.setState({elements: elementi});
    expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);
    done();
  });



  it('set state providing new title', (done) =>
  {

    const handleOnChangeTitle = sinon.spy();
    const element = shallow(<NewQoodle onAdd={handleOnChangeTitle} />);
    element.setState({elements: elementi});


    element
        .find(FormControl)
        .findWhere(n => n.prop('placeholder') === 'Title')
        .simulate('change', {target: {value: 'titlevalue'}});

    expect(element.state('title')).to.be.equal('titlevalue');
    done()
  });



  it('renders an input box fot Title', (done) => {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Title')
      ).to.have.length(1);
      done();
  });

  it('renders an input box for Description', (done) => {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Description')
      ).to.have.length(1);
      done();
  });


  it('renders 2 button to add Column, and to save qoodle', (done) =>
  {
      const element = shallow (<NewQoodle />);
      element.setState({elements: elementi});

      expect(
          element.find(Button)).to.have.length(2);
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);

      expect(element.find(Button).findWhere(n => n.prop('id') == 'saveButton').children().text())
      .to.be.equal('Salva!');
      done();
  });


  it('calls open function when click Button', (done) =>
  {
    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});

    element.find('.cent').simulate('click');

    expect(element.state('showColumnModal')).to.be.true
    done();
  });

  it('change states when calls modifyElement', (done) =>
  {
    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});

    expect(element.state('showModifyModal')).to.be.false;

    element.instance().modifyElement(2);

    expect(element.state('showModifyModal')).to.be.true;

    done();
  });


  it('calls open4Save function when click Button', (done) =>
  {
    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});

    expect(element.state('showSaveModal')).to.be.false;

    element.find('#saveButton').simulate('click');
    expect(element.state('showSaveModal')).to.be.true;

    done();
  });



  describe('update state when calls addNewColumn()', () => {

    it('increment number of columns', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      const oldNrElements = element.state('elements').length;
      element.instance().handleAddElement('Name',
      1,
      12435,
      'um',
      9);
      expect(element.state('elements').length).to.be.equal(oldNrElements + 1);

      done();
  });

  it('call of handleAddElement have the correct parameters', (done) =>
  {
    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});

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

    done();
});


it('call of handleAddElement have the correct parameters', (done) =>
{
  const element = shallow(<NewQoodle />);
  element.setState({elements: elementi});

  element.instance().handleAddElement = sinon.spy();
  element.instance().handleAddElement('',
  0,
  99999,
  'kg',
  0 );

  expect(element.instance().handleAddElement).calledWith('',
  0,
  99999,
  'kg',
  0);
  done();
});

it('call of modifyElement and after addelement ', (done) =>
{
  const element = shallow(<NewQoodle />);
  element.setState({elements: elementi});

  element.instance().handleAddElement = sinon.spy();
  element.instance().modifyElement = sinon.spy();

  element.instance().modifyElement(2, '',
  0,
  99999,
  'kg',
  0 );

  expect(element.instance().modifyElement).calledWith(2, '',
  0,
  99999,
  'kg',
  0);


  element.instance().handleAddElement('',
  0,
  99999,
  'kg',
  0 );

  expect(element.instance().handleAddElement).calledWith('',
  0,
  99999,
  'kg',
  0);

  done();
});

it('call 2 addElement in sequence', (done) =>
{
  const element = shallow(<NewQoodle />);
  element.setState({elements: elementi});

  element.instance().handleAddElement = sinon.spy();
  element.instance().modifyElement = sinon.spy();

  element.instance().handleAddElement('ciao',
  0,
  99999,
  'kg',
  3 );

  expect(element.instance().handleAddElement).calledWith('ciao',
  0,
  99999,
  'kg',
  3);


 element.instance().handleAddElement('',
  0,
  99999,
  'kg',
  0 );

  expect(element.instance().handleAddElement).calledWith('',
  0,
  99999,
  'kg',
  0);


  done();

});







  it('changes value of showColumnModal over the time', (done) =>
  {
    const element = shallow(<NewQoodle />);
    element.setState({elements: elementi});

    expect(element.state('showColumnModal')).to.be.false;
    element.find('.cent').simulate('click');
    expect(element.state('showColumnModal')).to.be.true;
    element.instance().handleAddElement('Name',
    1,
    12435,
    'um',
    20);
    expect(element.state('showColumnModal')).to.be.false;


    done();
  });

  });

  describe('update state when calls handleModification()', () => {

    it('modify state with correct parameters', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      element.instance().handleModification(2, 'pere', 4, 8, 'kg', 3.4);
      var target;
      var targetIndex= -1;
      var i = 1;

      var elements = element.instance().state.elements;

//codice brutto!!
  elements.forEach(function (el, i) {
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
            counter: 0,
            imgUrl: '_assets/img/redApple.png'
          }
        )


        done();
    });


    it('modify state with correct parameters', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      element.instance().handleModification(3, 'pere', 0 , 99999 , 'kg', 3.4);
      var target;
      var targetIndex= -1;
      var i = 1;

      var elements = element.instance().state.elements;

//codice brutto!!
  elements.forEach(function (el, i) {
  if (el.id === 3) {
     target = el;
     targetIndex=i;
  }
  i++;
  });


        expect(
          element.instance().state.elements[targetIndex]
        ).to.be.eql(
          {
            id:3,
            name: 'pere',
            min: 0,
            max: 99999,
            umoption: 'kg',
            coinoption: '€',
            price: 3.4,
            counter: 0,
            imgUrl: '_assets/img/redApple.png'
          }
        )

done();

    });





    it('modify state with different but complete parameters', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      element.instance().handleModification(2, 'avocado', 7, 8, 'kg', 3.4);
      var target;
      var targetIndex= -1;
      var i = 1;

      var elements = element.instance().state.elements;

//codice brutto!!
  elements.forEach(function (el, i) {
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
            name: 'avocado',
            min: 7,
            max: 8,
            umoption: 'kg',
            coinoption: '€',
            price: 3.4,
            counter: 0,
            imgUrl: '_assets/img/redApple.png'
          }
        )


        done();
    });




    it('modify state (el2) with incomplete parameters', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      element.instance().handleModification(2, 'pere', 4, 8, 'kg', 1);
      var target;
      var targetIndex= -1;
      var i = 1;

      var elements = element.instance().state.elements;

//codice brutto!!
  elements.forEach(function (el, i) {
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
            price: 1,
            counter: 0,
            imgUrl: '_assets/img/redApple.png'
          }
        )

        done();

    });



        it('modify state (el2) with incomplete parameters', (done) =>
        {
          const element = shallow(<NewQoodle />);
          element.setState({elements: elementi});


          element.instance().handleModification(3, 'pere', 4, 8, 'kg', 1);
          var target;
          var targetIndex= -1;
          var i = 1;

          var elements = element.instance().state.elements;

    //codice brutto!!
      elements.forEach(function (el, i) {
      if (el.id === 3) {
         target = el;
         targetIndex=i;
      }
      i++;
      });


            expect(
              element.instance().state.elements[targetIndex]
            ).to.be.eql(
              {
                id:3,
                name: 'pere',
                min: 4,
                max: 8,
                umoption: 'kg',
                coinoption: '€',
                price: 1,
                counter: 0,
                imgUrl: '_assets/img/redApple.png'
              }
            )


            done();
        });


    it('show modifymodal when call modifyElement', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});


      expect(element.state('showModifyModal')).to.be.false;

      element.instance().modifyElement();

      expect(element.state('showModifyModal')).to.be.true;



      done();
    });


  });



  describe('update state when calls handleSave()', () => {

    it('change closingDate into a specific Date', (done) =>
    {
      const element = shallow(<NewQoodle />);
      element.setState({elements: elementi});

      element.instance().handleSave(new Date('June 22, 2017 11:13:00'));

      expect(element.state('closingDate')).to.be.eql(new Date('June 22, 2017 11:13:00'));

      done();
    });
  });

});

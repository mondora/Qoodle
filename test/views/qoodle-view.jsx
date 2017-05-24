import chai, {expect} from 'chai';
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import QoodleElement from 'components/QoodleElement';
import QoodleView from 'views/master-page/qoodle-view';
import Summary from 'components/Summary';

chai.use(sinonChai);

describe('QoodleView', () => {

  it('check state default number of elements',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')).to.have.length(9);
  });

  it('check state default name of the first element',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')[0].name).to.be.equal('Banana');

  });


  it('render Button to check the total',() =>{
  const element = shallow(<QoodleView />);
  expect(element.find(Button).prop('id') === 'buyButton').to.be.equal(true);

  expect(element.find(Button).children().text()).to.be.equal('Totale: 22.5€');
  });







  describe('update state when calls Inc(Name)', () => {

    it('Render all QoodleElement',() =>{

      const element = shallow(<QoodleView />)
      expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);

    });
  });



  describe('update state when Inc(Name)', () => {

    it('Increment counter of specific element', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Inc('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 1);

      element.instance().Inc('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
  });



});

  describe('update state when Dec(Name)', () => {
    it('Decrement counter of specific element ', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Dec('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

      element.instance().Dec('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
    });

});



});

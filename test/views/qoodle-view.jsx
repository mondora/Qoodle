import chai, {expect} from 'chai';
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';


import QoodleElement from 'components/QoodleElement';
import QoodleView from 'views/master-page/qoodle-view';
import Summary from 'components/Summary';
import Timer from 'components/Timer';

chai.use(sinonChai);






describe('QoodleView', () => {



  it('render Title and Description',() =>{




    const element = mount(<QoodleView />);
    expect(
      element
      .find('h1')
      .text()
    ).to.be.equal('Acquisto di gruppo di novembre');

    expect(
      element
      .find('h3')
      .text()
    ).to.be.equal('È a disposizione sortita varietà di verdure e frutta di stagione');

  });




  it('check state default number of elements',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')).to.have.length(9);
  });

  it('check state default name of the first element',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')[0].name).to.be.equal('Banana');

  });


  it('render Button to check the total price',() =>{
  const element = shallow(<QoodleView />);
  expect(element.find(Button).prop('id') === 'buyButton').to.be.equal(true);

  expect(element.find(Button).children().text()).to.be.equal("Procedi all'acquisto (Totale: 22.5€)");
  });


  it('render Button to check the total number of elment choice',() =>{
  const element = shallow(<QoodleView purchase={false}/>);
  expect(element.find(Button).prop('id') === 'buyButton').to.be.equal(true);

  expect(element.find(Button).children().text()).to.be.equal("Conferma le scelte prese (sono 15)");
  });





  describe('update state when calls Inc(id)', () => {

    it('Render all QoodleElement',() =>{

      const element = shallow(<QoodleView />)
      expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);

    });
  });



  describe('update state when Inc(iden)', () => {

    it('Increment counter of specific element', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;


      element.instance().Inc(1);
      expect(element.state('elements')[0].counter).to.be.equal(oldCounter + 1);

      element.instance().Inc(1);
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
  });



});

  describe('update state when Dec(Name)', () => {
    it('Decrement counter of specific element ', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Dec(1);
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

      element.instance().Dec(1);
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
    });

});





});

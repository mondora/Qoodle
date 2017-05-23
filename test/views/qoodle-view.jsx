import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import QoodleElement from 'components/create-table';
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
    expect(element.state('elements')[0].name).to.be.equal('Name');

  });

  it('render the Summary component',() =>{
  const element = shallow(<QoodleView />)
  expect(element.find(Summary)).to.have.length(1);
  });

  it('render Panel ',() =>
  {
    const element = shallow(<QoodleView />);
    expect(element.find(Panel).prop('bsStyle')).to.be.equal('success');
    expect(element.find(Panel).prop('header')).to.be.equal('Riassunto scelte compiute:');

  });


  it('return QoodleElement from relative object using CreateQoodleElement',() =>{
  const element = shallow(<QoodleView />)
  var colonna = {
    name: 'Name',
    min: 0,
    max: 99999,
    umoption: 'kg',
    coinoption: '',
    price: 35,
    counter: 5,
    imgUrl: '_assets/img/bana.png'
  };


    var newQoodleElement = element.instance().Object2QoodleElement(colonna).props;

    expect(JSON.stringify(newQoodleElement) == JSON.stringify(<QoodleElement counter={5}
        id={'Name'}
        imgUrl={'_assets/img/bana.png'} name="Name" coin="€"
        price={35} um="kg" onInc={element.instance().Inc.bind(this)}
        onDec={element.instance().Dec.bind(this)}/>.props)).to.be.true;

    });


  describe('update state when calls Inc(Name)', () => {

    it('Render all QoodleElement',() =>{

      const element = shallow(<QoodleView />)
      expect(element.find('QoodleElement')).to.have.length(element.state('elements').length);
      //why not using find(QoodleElement);
    });
  });



  describe('update state when Inc(Name)', () => {

    it('Increment counter of specific element', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 1);

      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
  });



});

  describe('update state when Dec(Name)', () => {
    it('Decrement counter of specific element ', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Dec('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

      element.instance().Dec('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
    });

});



});

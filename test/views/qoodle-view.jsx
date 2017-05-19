import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import QoodleElement from 'components/create-table';
import QoodleView from 'views/master-page/qoodle-view';

chai.use(sinonChai);

describe('QoodleView', () => {

  it('check state default number of elements',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')).to.have.length(3);
  });

  it('check state default name of the first element',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')[0].name).to.be.equal('Name');

  });

  it('Render QoodleElement',() =>{

    const element = shallow(<QoodleView />)
    expect(element.find('QoodleElement')).to.have.length(1);
    //why not using find(QoodleElement);
  });

  describe('update state when Inc(Name)', () => {

    it('Decrement counter of specific element ', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 1);

      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
    });




    it('Increment counter of specific element', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 1);

      element.instance().Inc('Name');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
  });


/*  it('Decrement counter of specific element ', () =>
  {
    const element = shallow(<QoodleView />);
    const oldCounter = element.state('elements')[0].counter;
    element.instance().Dec('Name');
    expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

    element.instance().Dec('Name');
    expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
  });
*/

});
});

import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import NewQoodle from 'views/master-page/new-qoodle';

chai.use(sinonChai);

describe('NewQoodle', () => {

  it('check state default vaule of Modal',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('showColumnModal')).to.be.false;

  });

  it('renders an input box fot Title', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Title')
      ).to.have.length(1);
  });

  it('renders an input box fot Description', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Description')
      ).to.have.length(1);
  });


  it('renders a button to add Column', () =>
  {
      const element = shallow (<NewQoodle />);
      expect(
          element.find(Button)).to.exist;
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);


  });

  it('calls open function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    element.find(Button).simulate('click');

    expect(element.state('showColumnModal')).to.be.true

  });



});

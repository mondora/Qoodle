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


});

import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, Image} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import QoodleElement from 'components/QoodleElement';

chai.use(sinonChai);

describe('QoodleElement', () => {

    it('check default value of counter', () =>
    {
      const element = shallow(
        <QoodleElement
          name={'Banana'}
          price={13.5}
          um={'$'} />);

      expect(element.state('counter')).to.be.equal(0);

    });

    it('renders an div with className box', () =>
    {
      const element = shallow(
        <QoodleElement
          name={'Banana'}
          price={13.5}
          um={'$'} />);
        expect(element.findWhere(n => n.prop('className') === 'box')).to.have.length(1);
    });

    it('renders i tag with specific id', () =>
    {
      const element = shallow(
        <QoodleElement
          name={'Banana'}
          price={13.5}
          um={'$'} />);
    expect(element.findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);
    expect(element.findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);
    expect(element.findWhere(n => n.prop('id') === 'counter')).to.have.length(1);

  });

  it('renders all i tag', () =>
  {
    const element = shallow(
      <QoodleElement
        name={'Banana'}
        price={13.5}
        um={'$'} />);
  expect(element.find('i')).to.have.length(3);
  });


  it('renders all i tag', () =>
  {
    const element = shallow(
      <QoodleElement
        name={'Banana'}
        price={13.5}
        um={'$'} />);
  expect(element.find(Image)).to.have.length(1);
  });



});

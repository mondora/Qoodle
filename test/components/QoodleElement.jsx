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

      expect(element.instance().props.counter).to.be.equal(0);

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


  it('check props passed', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" um="$" price={35} counter={10}/>);
    expect(element.instance().props.imgUrl).to.be.equal("_assets/img/bana.png");
    expect(element.instance().props.name).to.be.equal("banana");
    expect(element.instance().props.um).to.be.equal("$");
    expect(element.instance().props.price).to.be.equal(35);
    expect(element.instance().props.counter).to.be.equal(10);
  });

  it('check counter ', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" um="$" price={35} />);

    expect(element.instance().props.counter).to.be.equal(0);
  });

  it('renders an input box for column name', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" um="$" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'title').text()).to.be.equal('banana');

  });


});

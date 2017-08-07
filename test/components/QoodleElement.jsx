import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, Image} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Price from 'components/Price';
import QoodleElement from 'components/QoodleElement';

chai.use(sinonChai);

describe('QoodleElement', () => {

    it('check default value of counter', () =>
    {
      const element = shallow(
        <QoodleElement
          elId={1}
          name={'Banana'}
          price={13.5}
          coin={'$'} um={'kg'}
          imgUrl={'_assets/img/bana.png'} />);

      expect(element.instance().props.counter).to.be.equal(0);

    });

    it('renders a div with className box', () =>
    {
      const element = shallow(
        <QoodleElement
          elId={1}
          name={'Banana'}
          price={13.5}
          coin={'$'} um={'kg'}
          imgUrl={'_assets/img/bana.png'}/>);
        expect(element.findWhere(n => n.prop('className') === 'box')).to.have.length(1);
    });

    it('renders i tag with specific id', () =>
    {
      const element = shallow(
        <QoodleElement
          elId={1}
          name={'Banana'}
          price={13.5}
          coin={'$'} um={'kg'}
          imgUrl={'_assets/img/bana.png'}/>);
    expect(element.find('#one').findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);
    expect(element.find('#one').findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);
    expect(element.findWhere(n => n.prop('id') === 'counter')).to.have.length(1);

  });

  it('renders all i tag', () =>
  {
    const element = shallow(
      <QoodleElement
        elId={1}
        name={'Banana'}
        price={13.5}
        coin={'$'} um={'kg'}
        imgUrl={'_assets/img/bana.png'}/>);
  expect(element.find('#one').find('i')).to.have.length(2);
  expect(element.find('#one').find('i')).to.have.length(2);
  });


  it('renders image tag', () =>
  {
    const element = shallow(
      <QoodleElement
        elId={1}
        name={'Banana'}
        price={13.5}
        coin={'$'} um={'kg'}
        imgUrl={'_assets/img/bana.png'}/>);
  expect(element.find(Image)).to.have.length(1);
  });



  it('check counter ', () =>
  {
    const element = shallow(<QoodleElement elId={1} imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);

    expect(element.instance().props.counter).to.be.equal(0);
  });

  it('renders a title of the element', () =>
  {
    const element = shallow(<QoodleElement elId={1} imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'title').text()).to.be.equal('banana');

  });

  it('renders a price of the element', () =>
  {
    const element = shallow(<QoodleElement elId={1} imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.find('Price')).to.have.length(1);

  });




  it('renders a counter of the element', () =>
  {
    const element = shallow(<QoodleElement elId={1} imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'counter').text()).to.be.equal('0');
  });


  describe('when user clicks plus button', () => {

     it('calls increase function providing an id', () => {
        const Inc = sinon.spy();
        const element = shallow(<QoodleElement elId={3}
        imgUrl="_assets/img/bana.png" name="banana" coin="$"
        um="kg" um="kg" price={35} counter={10} onInc={Inc}/>);


        expect(element.findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);

        element.findWhere(n => n.prop('className') === 'fa fa-plus').simulate('click', {target: {value: 'id cane'}});


        expect(Inc).has.been.calledWith(3);
    });
  });

  describe('when user clicks plus button', () => {

    it('calls increase function providing an id', () => {
      const Dec = sinon.spy();
      const element = shallow(
      <QoodleElement
        elId={3}
        imgUrl="_assets/img/bana.png"
        name="banana"
        coin="$"
        um="kg"
        um="kg"
        price={35}
        counter={10}
        onDec={Dec}/>);


      expect(element.findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);

      element.findWhere(n => n.prop('className') === 'fa fa-minus').simulate('click', {target: {value: 'id cane'}});


      expect(Dec).has.been.calledWith(3);




    });


  });


});

import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, Image} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Price from 'components/Price';

chai.use(sinonChai);

describe('Price', () => {

    it('check default value strinprice', () =>
    {
      const element = shallow(
        <Price
          price={13.5}
          coin={'$'}
          um={'kg'}
           />);

      expect(element.text()).to.be.equal(' 13.5 $ al kg');

    });


    it('render only unit of measure', () =>
    {
      const element = shallow(
        <Price
        um={'kg'}
           />);

      expect(element.text()).to.be.equal('kg');

    });




    it('check default value strinprice', () =>
    {
      const element = shallow(
        <Price
           />);

      expect(element.text()).to.be.equal('');

    });

});

import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Summary from 'components/Summary';
import SummaryRow from 'components/SummaryRow';

chai.use(sinonChai);

describe('Summary', () => {


    it('Render correct numer of element', ()=>{
    const lista = [
              {
                name: 'Name',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 5,
                imgUrl: '_assets/img/bana.png'
              },
              {
                name: 'Number Of Person',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 0,
                imgUrl: '_assets/img/redApple.png'
              },
              {
                name: 'Number of Vegans',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 0,
                imgUrl: '_assets/img/kiwi.png'
              }];


    const element = shallow(<Summary rows = {lista} />);
    expect(element.find(SummaryRow)).to.have.length(3);

    });

});

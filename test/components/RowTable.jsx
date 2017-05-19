/*import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import RowTable from 'components/RowTable';

chai.use(sinonChai);

describe('RowTable', () => {

  it('check elements props have length 9 ',() =>{
    const Cart = [
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
              },
              {
                name: 'Pesca',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 5,
                imgUrl: '_assets/img/bana.png'
              },
              {
                name: 'Uva',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 0,
                imgUrl: '_assets/img/redApple.png'
              },
              {
                name: 'Number of Vegetarian',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 0,
                imgUrl: '_assets/img/kiwi.png'
              },
              {
                name: 'Nome',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 5,
                imgUrl: '_assets/img/bana.png'
              },
              {
                name: 'Number Of People',
                min: 0,
                max: 99999,
                umoption: '',
                coinoption: '',
                price: 0,
                counter: 0,
                imgUrl: '_assets/img/redApple.png'
              },
          ];
    const element = shallow(<RowTable ele={Cart}/>);

      //expect(element.findWhere('th')).to.have.length(9);
      expect(element.find('tr')).to.have.length(element.instance().props.ele.length);

  });
});*/

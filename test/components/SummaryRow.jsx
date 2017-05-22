import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SummaryRow from 'components/SummaryRow';

chai.use(sinonChai);

describe('SummaryRow', () => {

  it('Render correct Name', ()=>{

    const oggetto = {
      name: 'Name',
      min: 0,
      max: 99999,
      umoption: '',
      coinoption: '€',
      price: 1,
      counter: 4,
      imgUrl: '_assets/img/bana.png'
    };

    const element = shallow(<SummaryRow object = {oggetto} />);


    expect(element.find('div').text()).to.be.equal('Name 4€');



  });



});

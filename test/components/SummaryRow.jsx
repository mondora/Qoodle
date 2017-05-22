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

    const element = shallow(<SummaryRow name = 'Name' price ={1}  counter ={4} coinoption = '€'/>);


    expect(element.find('div').text()).to.be.equal('Name 4€');

  });

  it('Render correct text using  price*counter', ()=>{
  const nom = 'Banana';
  const pri = 5;
  const cou = 4;
  const coi = '€';

  const element = shallow(<SummaryRow name = {nom} price={pri}  counter = {cou} coinoption ={coi}/>);

  expect(element.find('div').text()).to.be.equal('Banana ' +pri * cou +coi);
  });


});

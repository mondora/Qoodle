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

    const element = shallow(<SummaryRow name = 'Banana' price ={1}  counter ={4} coinoption = '€'/>);


    expect(element.text()).to.be.equal('Banana ( 1  x  4 )    = 4€');

  });

  it('Render correct text using  price*counter', ()=>{
  const nom = 'Banana';
  const pri = 5;
  const cou = 4;
  const coi = '€';

  const element = shallow(<SummaryRow name = {nom} price={pri}  counter = {cou} coinoption ={coi}/>);

  expect(element.find('p').text()).to.be.equal('Banana ( ' + pri + '  x  ' + cou+ ' )    = ' +  pri * cou +coi);
  });



  it("Render correct text if isn't a price element", ()=>{
  const nom = 'Vegani';
  const pri = 0;
  const cou = 4;
  const coi = '€';
  const um = 'persone'

  const element = shallow(<SummaryRow name = {nom} price = {pri}  counter = {cou} coinoption ={coi} umoption={um}/>);

  expect(element.find('p').text()).to.be.equal('Numero di Vegani: ' + cou + " " + um );
  });



});

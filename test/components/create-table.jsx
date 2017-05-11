import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import CreateTable from 'components/create-table'


chai.use(sinonChai);

describe('CreateTable', () => {

  it('renders well the title props', ()=>{

    const element = shallow(<CreateTable tit='A Christmas Dinner'/>);

    expect(element.instance().props.tit).to.equal('A Christmas Dinner');

  });


  it('use props for render caption', ()=>{
    const element = shallow(<CreateTable tit='A Christmas Dinner'/>);
    expect(element.find('caption').text()).to.be.equal('A Christmas Dinner');

  ;});


});

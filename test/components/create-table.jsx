import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import CreateTable from 'components/create-table'
import QoodleHeaderTable from 'components/QoodleHeaderTable'

chai.use(sinonChai);

describe('CreateTable', () => {

  const columne = {     columns: [
                  {
                    name: 'Name',
                    min: 0,
                    max: 99999,
                    umoption: '',
                    coinoption: ''
                  },
                  {
                    name: 'Number Of Person',
                    min: 0,
                    max: 99999,
                    umoption: '',
                    coinoption: ''
                  },
                  {
                    name: 'Number of Vegans',
                    min: 0,
                    max: 99999,
                    umoption: '',
                    coinoption: ''
                  }
              ]};

  it('renders well the title props', ()=>{

    const element = shallow(<CreateTable tit='A Christmas Dinner'/>);

    expect(element.instance().props.tit).to.equal('A Christmas Dinner');

  });


  it('use props for render caption', ()=>{
    const element = shallow(<CreateTable tit='A Christmas Dinner'/>);
    expect(element.find('caption').text()).to.be.equal('A Christmas Dinner');

  ;});


  it('renders QoodleHeaderTable using props',() => {
    const element = shallow(<CreateTable tit='A Christmas Dinner' colonne={columne}/>);
    expect(element.find(QoodleHeaderTable)).exist;

    //qui uso struct proprio perché a QoodleHeaderTable passo colonne in una props chiamata struct
    expect(element.find(QoodleHeaderTable).props().struct).to.be.equal(columne);

  });




});

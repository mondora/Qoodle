import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import QVHeaderTable from 'components/qv-header-table'


chai.use(sinonChai);

describe('QVHeaderTable', () => {

  const columnsDescription = [
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
              ];



  it('renders well the struct(columns) props', ()=>{

    const element = shallow(<QVHeaderTable struct={columnsDescription}/>);

      console.log(element.html());

    expect(element.find('th')).to.have.length(element.instance().props.struct.columnsDescription.length);

  });



});

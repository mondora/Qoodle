import chai, {expect} from 'chai';
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import {Popover} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Countdown from 'react-cntdwn';
import Timer from 'components/Timer';

chai.use(sinonChai);

describe('Timer', () => {


  it('check render counter object',() =>{

    const element = shallow(<Timer closingQoodle={new Date(2017, 5, 25)} title={'Termine per acquistare:'}/>)
    expect(element.find(Countdown)).to.have.length(1);
  });
});

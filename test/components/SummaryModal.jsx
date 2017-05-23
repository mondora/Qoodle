import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SummaryModal from 'components/SummaryModal';

chai.use(sinonChai);

describe('SummaryModal', () => {

  const elementi =[
            {
              name: 'Banana',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 1.5,
              counter: 5,
              imgUrl: '_assets/img/bana.png'
            },
            {
              name: 'MelaRossa',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 2,
              counter: 0,
              imgUrl: '_assets/img/redApple.png'
            },
            {
              name: 'Kiwi',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 3.5,
              counter: 0,
              imgUrl: '_assets/img/kiwi.png'
            },
            {
              name: 'Pesca',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 0,
              counter: 5,
              imgUrl: '_assets/img/bana.png'
            },
            {
              name: 'Uva',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 0,
              counter: 0,
              imgUrl: '_assets/img/redApple.png'
            },
            {
              name: 'Number of Vegetarian',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 0,
              counter: 0,
              imgUrl: '_assets/img/kiwi.png'
            },
            {
              name: 'Nome',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 3,
              counter: 5,
              imgUrl: '_assets/img/bana.png'
            },
            {
              name: 'Number Of People',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 4,
              counter: 0,
              imgUrl: '_assets/img/redApple.png'
            },
            {
              name: 'Number of Veggie',
              min: 0,
              max: 99999,
              umoption: '',
              coinoption: '€',
              price: 5,
              counter: 0,
              imgUrl: '_assets/img/kiwi.png'
            }
        ];



  it('check show props', () =>
  {
    const element = shallow(<SummaryModal rows= {elementi} close={sinon.spy()} show={false}/>);
    expect(element.instance().props.show).to.be.false;

  });

  it('Check default show props', () =>
  {
    const element = shallow(<SummaryModal rows= {elementi} close={sinon.spy()} check={sinon.spy()}/>);
    expect(element.instance().props.show).to.be.false;

  });

  it('Render p foreach element with value != 0', () =>
  {
    const elementi = {elementi};
    const element = shallow(<SummaryModal rows= {elementi} close={sinon.spy()} />);
    var howMany=0
    for(var i=0; elementi.length; i++)
    {
        if (elementi[i].counter * elmenti[i].price != 0)
        howMany++;
    }
    expect(element.find('p')).have.length(howMany);

  });

  it('render 2 button', ()=>
  {
    const element = shallow(<SummaryModal rows= {elementi} close={sinon.spy()} check={sinon.spy()}/>);
    expect(element.find(Button)).to.have.length(2);

  });







});

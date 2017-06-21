import chai, {expect} from 'chai';
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ListQoodleElement from 'components/ListQoodleElement';
import ListPage from 'views/master-page/list-page';

chai.use(sinonChai);




describe('ListPage', () => {

  it('render ListQoodleElement',() =>{
    const element = shallow(<ListPage/>);

    expect(element.find(ListQoodleElement)).to.have.length(2);

});

  it('render a list title', () =>{

    const element = shallow(<ListPage/>);

    expect(element.find('h1').text()).to.be.equal('Lista di tutti i Qoodle')
  });


//COME FARE??
/*  it('calls open funcion when clic a ListQoodleElement', () =>
  {
    const element = shallow(<ListPage/>);
    console.log("000000000000000000000000000000000000000000", element.findWhere(n => n.prop('className') === "col" & n.prop('id') === 1).children().html());

    element.findWhere(n => n.prop('className') === "col" & n.prop('id') === 1).simulate('click');



  });
*/

});

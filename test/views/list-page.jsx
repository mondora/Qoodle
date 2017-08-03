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

  var qoodlesProva = [
      {
          "qoodlesId": 1,
          "title": "Gas di Novembre",
          "description": "idfsofdsijjfsdijfsdijfsijosdfjiofd",
          "partecipants": 6,
          "closingDate": "October 13, 2014 11:13:00"

        },
      {
        "qoodlesId": 2,
        "title": "Christams Dinner",
        "description": "idfsofdsijjfsdijfsdijfsijosdfjiofd",
        "partecipants": 4,
        "closingDate": "October 13, 2018 11:13:00"
      }


  ];




  it('render ListQoodleElement',(done) =>{
    const element = shallow(<ListPage/>);
    element.setState({Qoodle: qoodlesProva});
    expect(element.find(ListQoodleElement)).to.have.length(2);
    done();
});

  it('render a list title', () =>{

    const element = shallow(<ListPage/>);

    expect(element.find('h1').text()).to.be.equal('Lista di tutti i Qoodle')
  });





});

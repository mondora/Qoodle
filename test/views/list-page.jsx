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
          "id": 1,
          "titolo": "Gas di Novembre",
          "descrizione": "idfsofdsijjfsdijfsdijfsijosdfjiofd",
          "partecipanti": 6,
          "dataChiusura": "October 13, 2014 11:13:00"

        },
      {
        "id": 2,
        "titolo": "Christams Dinner",
        "descrizione": "idfsofdsijjfsdijfsdijfsijosdfjiofd",
        "partecipanti": 4,
        "dataChiusura": "October 13, 2018 11:13:00"
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

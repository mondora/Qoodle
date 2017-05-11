import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import CreateTable from 'components/create-table'
import NewQoodle from 'views/master-page/new-qoodle';
import QVHeaderTable from 'components/qv-header-table'

chai.use(sinonChai);

describe('NewQoodle', () => {

  it('check state default vaule of Modal',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('showColumnModal')).to.be.false;

  });

  it('check state default value for Title and description',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('title')).to.be.equal('Dovrò mettere qui il Title');
    expect(element.state('description')).to.be.empty;
  });

  it('check state default value for columns',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('columns')).to.have.length(3);
    expect(element.state('columns')[0]).to.include.keys('name');
    expect(element.state('columns')[0]).to.include.keys('min');
    expect(element.state('columns')[0]).to.include.keys('max');
    expect(element.state('columns')[0]).to.include.keys('umoption');
    expect(element.state('columns')[0]).to.include.keys('coinoption');
  });

  it('render titleInputBox and real title in sync', () =>
  {
    const element = shallow(<NewQoodle/>);
    element
        .find(FormControl)
        .findWhere(n => n.prop('placeholder') === 'Title')
        .simulate('change', {target: {value: 'titlevalue'}});

        expect(handleOnChangeTitle).has.been.calledWith('titlevalue')
    //expect().to.be.equal(element.state('columns')[0].prop('title'))

  });


  it('renders an input box fot Title', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Title')
      ).to.have.length(1);
  });

  it('renders an input box fot Description', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Description')
      ).to.have.length(1);
  });


  it('renders a button to add Column', () =>
  {
      const element = shallow (<NewQoodle />);
      expect(
          element.find(Button)).to.exist;
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);


  });

  it('calls open function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    element.find(Button).simulate('click');

    expect(element.state('showColumnModal')).to.be.true

  });

  describe('check table', () => {

    it('exist CreateTable', () =>{

      const element = render(<NewQoodle />);
      expect(element.find(CreateTable)).to.exist;


      //expect(element).to.contain(QVHeaderTable);
      //expect(element.find(CreateTable).find(QVHeaderTable).findWhere(n => n.prop('scope') === 'col')).to.have.length(4);

    //  expect(element.find(CreateTable).find(QVHeaderTable).find('th')).to.have.length(4);


    }
  );


  });



});

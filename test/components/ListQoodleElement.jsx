import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import Countdown from 'react-cntdwn';
import {Button, FormControl, Image} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListQoodleElement from 'components/ListQoodleElement';

chai.use(sinonChai);

describe('ListQoodleElement', () => {

    it('check default value of title', () =>
    {
      const element = shallow(
        <ListQoodleElement
          id={1}
          title={"Gas di Novembre"}
          partecipants={6}
          description={"quaququa anche la per un acquisto migliore"}
          closingDate={new Date(2017, 5, 22, 12).toString()}
          openIt={sinon.spy()}
          details={sinon.spy()}
          />);

      expect(element.find('h2').text()).to.be.equal("Gas di Novembre");
    });

    it('renders a 4 ListGroupItem', () =>
    {
      const element = shallow(
        <ListQoodleElement
          id={1}
          title={"Gas di Novembre"}
          partecipants={6}
          description={"quaququa anche la per un acquisto migliore"}
          closingDate={new Date(2017, 5, 22, 12).toString()}
          openIt={sinon.spy()}
          details={sinon.spy()}
          />);
        expect(element.find('ListGroupItem')).to.have.length(4);
    });

    it('renders ListGroup containing 3 ListGroupItem', () =>
    {
      const element = shallow(
        <ListQoodleElement
          id={1}
          title={"Gas di Novembre"}
          partecipants={6}
          description={"quaququa anche la per un acquisto migliore"}
          closingDate={new Date(2017, 5, 22, 12).toString()}
          openIt={sinon.spy()}
          details={sinon.spy()}
          />);
        expect(element.find(ListGroup)).to.have.length(1);

        expect(element.find(ListGroupItem)).to.have.length(4);

  });

describe("render different color if time has expired", () =>
{
  it('renders success ListGroupItem', () =>
  {

    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() + 30);

    const element = shallow(
      <ListQoodleElement
        id={1}
        title={"Gas di Novembre"}
        partecipants={6}
        description={"quaququa anche la per un acquisto migliore"}
        closingDate={testDate.toString()}
        openIt={sinon.spy()}
        details={sinon.spy()}
        />);


      expect(element.findWhere(n => n.prop('bsStyle') ==='success')).have.length(1);

  });


  it('renders ListGroupItem', () =>
  {

    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() + 30);

    const element = shallow(
      <ListQoodleElement
        id={1}
        title={"Gas di Novembre"}
        partecipants={6}
        description={"quaququa anche la per un acquisto migliore"}
        closingDate={testDate.toString()}
        openIt={sinon.spy()}
        details={sinon.spy()}
        />);


      expect( element.findWhere(n => n.prop('bsStyle') ==='warning').children().text() ).to.be.equal("PARTECIPA!");

  });




  it('renders icon for magnifyng glass and timer', () =>
  {
    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() + 30);

    const element = shallow(
      <ListQoodleElement
        id={1}
        title={"Gas di Novembre"}
        partecipants={6}
        description={"quaququa anche la per un acquisto migliore"}
        closingDate={testDate.toString()}
        openIt={sinon.spy()}
        details={sinon.spy()}
        />);
  expect(element.find(Image)).to.have.length(2);
});

it('renders icon for magnifyng glass and timer', () =>
{
  const testDate = new Date();
  testDate.setSeconds(testDate.getSeconds() + 30);

  const element = shallow(
    <ListQoodleElement
      id={1}
      title={"Gas di Novembre"}
      partecipants={6}
      description={"quaququa anche la per un acquisto migliore"}
      closingDate={testDate.toString()}
      openIt={sinon.spy()}
      details={sinon.spy()}
      />);
expect(element.find(Image)).to.have.length(2);
});








it('check calls details function when click title(or magnifyng glass)', () =>
{
  const testDate = new Date();
  testDate.setSeconds(testDate.getSeconds() + 30);

  var details = sinon.spy();

  const element = shallow(
    <ListQoodleElement
      id={2}
      title={"Gas di Novembre"}
      partecipants={6}
      description={"quaququa anche la per un acquisto migliore"}
      closingDate={testDate.toString()}
      openIt={sinon.spy()}
      details={details}
      />);


element.find('#QoodleBoxTitle').simulate('click');


expect(details).has.been.calledWith(2);

});


it('check calls openIt function when click "PARTECIPA!"', () =>
{
  const testDate = new Date();
  testDate.setSeconds(testDate.getSeconds() + 30);

  var open = sinon.spy();

  const element = shallow(
    <ListQoodleElement
      id={2}
      title={"Gas di Novembre"}
      partecipants={6}
      description={"quaququa anche la per un acquisto migliore"}
      closingDate={testDate.toString()}
      openIt={open}
      details={sinon.spy()}
      />);


element.find('#partecipates').simulate('click');


expect(open).has.been.calledWith(2);

});








it('renders "danger" ListGroupItem', () =>
  {


  });

});






});

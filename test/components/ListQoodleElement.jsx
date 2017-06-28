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






//COME FARE QUESTO??
  /*it('renders "danger" ListGroupItem', () =>
  {

    var testDate = new Date();
    testDate = new Date( (testDate.getTime() - 100000));

    const element = shallow(
      <ListQoodleElement
        id={1}
        title={"Gas di Novembre"}
        partecipants={6}
        description={"quaququa anche la per un acquisto migliore"}
        closingDate={testDate.toString()}
        openIt={sinon.spy()}
        />);


      expect(element.findWhere(n => n.prop('bsStyle') ==='danger')).have.length(1);


  });*/

});






/*



  it('check counter ', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);

    expect(element.instance().props.counter).to.be.equal(0);
  });

  it('renders a title of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'title').text()).to.be.equal('banana');

  });

  it('renders a price of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.find('p').text()).to.be.equal('35 $ al kg');


  });

  it('renders a counter of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'counter').text()).to.be.equal('0');
  });


  describe('when user clicks plus button', () => {

     it('calls increase function providing an id', () => {
        const Inc = sinon.spy();
        const element = shallow(<QoodleElement id="id value"
        imgUrl="_assets/img/bana.png" name="banana" coin="$"
        um="kg" um="kg" price={35} counter={10} onInc={Inc}/>);


        expect(element.findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);

        element.findWhere(n => n.prop('className') === 'fa fa-plus').simulate('click', {target: {value: 'id cane'}});
  //qui praticamente simulando un click non ricambio lo stato.
  //quindi l'id vale sembre quello con cui ho creato l'elemento

        expect(Inc).has.been.calledWith('id value');
    });
  });

  describe('when user clicks plus button', () => {

    it('calls increase function providing an id', () => {
      const Dec = sinon.spy();
      const element = shallow(
      <QoodleElement
        id="id value"
        imgUrl="_assets/img/bana.png"
        name="banana"
        coin="$"
        um="kg"
        um="kg"
        price={35}
        counter={10}
        onDec={Dec}/>);


      expect(element.findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);

      element.findWhere(n => n.prop('className') === 'fa fa-minus').simulate('click', {target: {value: 'id cane'}});
//qui praticamente simulando un click non ricambio lo stato.
//quindi l'id vale sembre quello con cui ho creato l'elemento

      expect(Dec).has.been.calledWith('id value');




    });


  });

*/
});

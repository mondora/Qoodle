import chai, {expect} from 'chai';
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';


import QoodleElement from 'components/QoodleElement';
import QoodleView from 'views/master-page/qoodle-view';
import Summary from 'components/Summary';
import Timer from 'components/Timer';

chai.use(sinonChai);






describe('QoodleView', () => {

  const elementi = [
            {
              "id":1,
              "name": "Banana",
              "min": 0,
              "max": 99999,
              "umoption": "kg",
              "coinoption": "$",
              "price": 1.5,
              "counter": 5,
              "imgUrl": "_assets/img/bana.png"
            },
            {
              "id":2,
              "name": "MelaRossa",
              "min": 0,
              "max": 99999,
              "umoption": "kg",
              "coinoption": "€",
              "price": 2,
              "counter": 0,
              "imgUrl": "_assets/img/redApple.png"
            },
            {
              "id":3,
              "name": "Kiwi",
              "min": 0,
              "max": 99999,
              "umoption": "",
              "coinoption": "",
              "price": 0,
              "counter": 0,
              "imgUrl": "_assets/img/kiwi.png"
            },
            {
              "id":4,
              "name": "Pesca",
              "min": 0,
              "max": 99999,
              "umoption": "",
              "coinoption": "€",
              "price": 0,
              "counter": 5,
              "imgUrl": "_assets/img/bana.png"
            },
            {
              "id":5,
              "name": "Uva",
              "min": 0,
              "max": 99999,
              "umoption": "",
              "coinoption": "€",
              "price": 0,
              "counter": 0,
              "imgUrl": "_assets/img/redApple.png"
            },
            {
              "id":6,
              "name": "Number of Vegetarian",
              "min": 0,
              "max": 99999,
              "umoption": "",
              "coinoption": "€",
              "price": 0,
              "counter": 0,
              "imgUrl": "_assets/img/kiwi.png"
            },
            {
              "id":7,
              "name": "Kiwi",
              "min": 0,
              "max": 99999,
              "umoption": "bott",
              "coinoption": "€",
              "price": 3,
              "counter": 5,
              "imgUrl": "_assets/img/bana.png"
            },
            {
              "id": 8,
              "name": "Number Of People",
              "min": 0,
              "max": 99999,
              "umoption": "kg",
              "coinoption": "€",
              "price": 4,
              "counter": 0,
              "imgUrl": "_assets/img/redApple.png"
            },
            {
              "id": 9,
              "name": "Number of Veggie",
              "min": 0,
              "max": 99999,
              "umoption": "person",
              "coinoption": "",
              "price": 0,
              "counter": 0,
              "imgUrl": "_assets/img/kiwi.png"
            }
        ];


  it('render Title and Description',(done) =>{


          const element = shallow(<QoodleView />);
          element.setState({elements: elementi});
          expect(
            element
            .find('h1')
            .text()
          ).to.be.equal('Acquisto di gruppo di novembre');

          expect(
            element
            .find('h3')
            .text()
          ).to.be.equal('È a disposizione sortita varietà di verdure e frutta di stagione');


          done();



  });



  it('check state default number of elements',(done) =>{
    const element = shallow(<QoodleView />);
    element.setState({elements: elementi});
    expect(element.state('elements')).to.have.length(9);
    done();

  });

  it('check state default name of the first element',(done) =>{
      const element = shallow(<QoodleView />)
      element.setState({elements: elementi});
      expect(element.state('elements')[0].name).to.be.equal('Banana');
      done();
  });


  it('render Button to check the total price',(done) =>{
    const element = shallow(<QoodleView />);
    element.setState({elements: elementi});
    expect(element.find(Button).prop('id') === 'buyButton').to.be.equal(true);

    expect(element.find(Button).children().text()).to.be.equal("Procedi all'acquisto (Totale: 22.5€)");
    done();
  });

  it('render Button to check the total number of elment choice',(done) =>{

    const element = shallow(<QoodleView purchase={false}/>);
    element.setState({elements: elementi});
    expect(element.find(Button).prop('id') === 'buyButton').to.be.equal(true);

    expect(element.find(Button).children().text()).to.be.equal("Conferma le scelte prese (sono 15)");
    done();

  });





  describe('update state when calls Inc(id)', () => {

    it('Render all QoodleElement',(done) =>{

      const element = shallow(<QoodleView />)
      element.setState({elements: elementi});
      expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);
      done();
    });
  });



  describe('update state when Inc(iden)', () => {
      it('Increment counter of specific element', (done) =>
      {
        const element = shallow(<QoodleView />);
        element.setState({elements: elementi});
        const oldCounter = element.state('elements')[0].counter;


        element.instance().Inc(1);
        expect(element.state('elements')[0].counter).to.be.equal(oldCounter + 1);

        element.instance().Inc(1);
        expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);

        done();
    });

});

  describe('update state when Dec(Name)', () => {

    it('Decrement counter of specific element ', (done) =>
    {
      const element = shallow(<QoodleView />);
      element.setState({elements: elementi});
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Dec(1);
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

      element.instance().Dec(1);
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
      done();
  });
});




});

import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import ListQoodleElement from "../../components/ListQoodleElement";



class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: []
        };
    }


        componentDidMount()
    {

      console.log("test" + process.env.REACT_APP_SPECIFIC_ID );

    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodles';
    var myInit = {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        };

  fetch(url, myInit).
  then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw new Error('Ooops...something went wrong.');
    }
    })
    .then(function(data) {
        data.forEach( (ele)=>
        ele.closingDate = new Date(ele.closingDate).toDateString());;
        { this.setState({ Qoodle: data });}
    }
    .bind(this))
    .catch((error) => { console.error(error); });




    }





    open(link)
    {
         window.location = link
    }

    details()
    {
      {alert("visualizza dettagli")}
    }

    renderListQoodleElements () {
      return this.state.Qoodle.map(element => (
        <div className="col" key={element.qoodlesId.toString()} id ={element.qoodlesId}>
          <ListQoodleElement
            id={element.qoodlesId}
            title={element.title}
            partecipants={element.partecipants}
            description={element.description}
            closingDate={element.closingDate.toString()}
            openIt={this.open.bind(this, "#/qoodle/" + element.qoodlesId)}
            details={this.details.bind(this)}
            />
      </div>
      ));
    }






    render()
    {
      var d = new Date(2017, 5, 22);
      var n = d.toString();

      var testDate = new Date();
      testDate = new Date( (testDate.getTime() - 100000));



      return (

        <div id="list">

          <div className="row">
            {this.renderListQoodleElements()}
          </div>

        </div>
        )
    }
}

export default ListPage;

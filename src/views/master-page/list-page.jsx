import React, {Component} from "react";
import ListQoodleElement from "../../components/ListQoodleElement";



class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: [],
        };
    }



        componentDidMount()
    {

      var token;
      var client;
      var email;

      if (typeof(Storage) !== "undefined")
      {
        token = sessionStorage.getItem("Idtoken");
        client = sessionStorage.getItem("IdClient");
        email = sessionStorage.getItem("email");
      }

      var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodles';

      var myInit = {
            method: 'get',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'id_token': token,
              'id_client': client,
              'email': email
            },
          };

      fetch(url, myInit)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error('Ooops...something went wrong.');
        }
        })
        .then(function(data) {
            data.map( (ele)=>
            ele.closingDate = new Date(ele.closingDate).toDateString());
            data.sort( (a, b) => new Date(a.closingDate) < new Date(b.closingDate) ? -1 : 1);
             this.setState({ Qoodle: data });
        }
        .bind(this))
        .catch((error) => {
          alert("NON PUOI ACCEDERE");
          console.error(error);
          window.location = "/";
          });




    }

    deleteQoodle(iden, owner)
    {
        var token = sessionStorage.getItem("Idtoken");
        var client = sessionStorage.getItem("IdClient");
        var email = sessionStorage.getItem("email");


        var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodle/' + iden;
        var myInit = {
          method: 'delete',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'id_token': token,
            'id_client': client,
            'email': email,
            'owner': owner,
          },
          body: ""
        };


        fetch(url, myInit)
        .then( function(response) {
          if(response.status === 200){
              alert("Eliminato correttamente il Qoodle");
              return true;
          }
          else
          {
            if(response.status === 401){
            alert("Non sei atuorizzato per cancellare questo Qoodle");
            return false;
            }
            else {
                  throw new Error("Network response was not ok");
            }
          }

        }).then( (x) =>
          {
            if(x){
              var removeIndex = this.state.Qoodle.findIndex( (el) => el.qoodlesId === iden);
              var elementi = this.state.Qoodle;
              elementi.splice(removeIndex, 1);
              this.setState({
                Qoodle: elementi
              });
            }
          });

  //      var removeIndex = this.state.Qoodle.findIndex( (el) => el.qoodlesId === iden);
    //    var elementi = this.state.Qoodle;
      //  elementi.splice(removeIndex, 1);
      //  this.setState({
      //    Qoodle: elementi
      //  })

    }



    open(link)
    {
         window.location = link
    }

    details(link)
    {
      window.location = link
    }

    renderListQoodleElements () {
      return this.state.Qoodle.map(element => (
        <div className="col" key={element.qoodlesId.toString()} id={element.qoodlesId}>
          <ListQoodleElement
            id={element.qoodlesId}
            title={element.title}
            partecipants={element.partecipants}
            description={element.description}
            closingDate={element.closingDate.toString()}
            backgroundImage={element.backgroundImage}
            openIt={this.open.bind(this, "#/qoodle/" + element.qoodlesId)}
            details={this.details.bind(this, "#/details/" + element.qoodlesId)}
            owner={element.owner}
            remove={this.deleteQoodle.bind(this)}
            />
      </div>
      ));
    }






    render()
    {

      return (
        <div className="body">
          <h1 className="titlePage">Lista dei qoodle</h1>
        <div id="list">

          <div className="row">
            {this.renderListQoodleElements()}
          </div>

        </div>
        </div>
        )
    }
}

export default ListPage;

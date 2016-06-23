function sumCol(key, obj) {
    var sum = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && key === prop && typeof parseInt(obj[prop]) == "number") {
            sum += parseInt(obj[prop]);
        }
        else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            sum += sumCol(key, obj[prop]);
        }
    }
    return sum;
}

function buildFormAdd(obj){
  var row = document.createElement("tr");
  for(elem in obj){
    var tdInput = document.createElement("td");
    var inputElem = document.createElement("input");
    inputElem.setAttribute("type", obj[elem].type);
    inputElem.setAttribute("name", obj[elem].name);
    inputElem.setAttribute("placeholder", obj[elem].name);
    inputElem.onkeypress = function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { //Enter keycode
          var jsonData = {};
          for(var inputKey in data[0].struct){
            jsonData[data[0].struct[inputKey].name] = document.getElementsByName(data[0].struct[inputKey].name)[0].value;
          }

          data[0].elements.push(jsonData);
          buildTable();
      }
      // onclick stuff
    }
    tdInput.appendChild(inputElem);
    row.appendChild(tdInput);
  }
  return row;
}

function emptyNode(elementDOM){
  while(elementDOM.firstChild){
      elementDOM.removeChild(elementDOM.firstChild);
  }
}

function buildTable() {
  document.getElementsByTagName("caption")[0].textContent = data[0].argument;
  var theadElement = document.getElementsByTagName("thead")[0];
  var tfootElement = document.getElementsByTagName("tfoot")[0];
  var tbodyElement = document.getElementsByTagName("tbody")[0];
  emptyNode(theadElement);
  emptyNode(tfootElement);
  emptyNode(tbodyElement);
  var rowHead = document.createElement("tr");
  var rowBody;
  var rowFoot = document.createElement("tr");
  for(var i = 0; i< data[0].struct.length; i++){
      //HEADER + FOOTER sums
      var col = document.createElement("th");
      col.setAttribute("scope", "col");
      var colFoot = document.createElement("td");
      colFoot.setAttribute("data-title", data[0].struct[i].name);
      colFoot.setAttribute("id", data[0].struct[i].name);
      var node = document.createTextNode(data[0].struct[i].name);
      var sumFooter = data[0].struct[i].type == "number" ? sumCol(data[0].struct[i].name, data[0].elements) : "";
      var nodeFoot = document.createTextNode(sumFooter);
      col.appendChild(node);
      colFoot.appendChild(nodeFoot);
      rowHead.appendChild(col);
      rowFoot.appendChild(colFoot);
  }

  theadElement.appendChild(rowHead);

  //BODY
  // creazione input per add new
  tbodyElement.appendChild(buildFormAdd(data[0].struct));

  for(elem in data[0].elements){
    rowBody = document.createElement("tr");
    rowBody.setAttribute("id", "row_" + elem)
    for(var single in data[0].elements[elem]){
      var tagElem = data[0].chiefElem == single ? "th" : "td"
      var colBody = document.createElement(tagElem);
      colBody.setAttribute("scope", "row");
      colBody.setAttribute("data-title", single);
      var nodeBody = document.createTextNode(data[0].elements[elem][single]);
      colBody.appendChild(nodeBody);
      rowBody.appendChild(colBody);
    }
    rowBody.onclick = function(e) {
      var idElem = e.target.parentElement.getAttribute("id") ? e.target.parentElement.getAttribute("id").substring(4) : ""; //recupero l'id dell'elemento
      var valueField = e.target.innerHTML; //recupero il valore
      e.target.innerHTML="" //pulisco il campo
      var inputField = document.createElement("input");
      inputField.setAttribute("value", valueField);
      inputField.setAttribute("type", "text");
      inputField.onkeypress =  function(e) {
          var code = (e.keyCode ? e.keyCode : e.which);
          if(code == 13) { //Enter keycode
            var elementKeyToEdit = e.target.parentElement.dataset.title;
            data[0].elements[idElem][elementKeyToEdit]= e.target.value
            buildTable();
          }
        }
      e.target.appendChild(inputField);

    }
    tbodyElement.appendChild(rowBody);
    tfootElement.appendChild(rowFoot);
  }
}

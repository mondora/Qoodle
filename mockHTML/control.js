function enterpressalert(e, textarea){
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) { //Enter keycode
      alert('enter press');
  }
}
function sumCol(key, obj) {
    var sum = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && key === prop) {
            sum += obj[prop];
        }
        else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            sum += sumCol(key, obj[prop]);
        }
    }
    return sum == 0 ? "" : sum;
}

function buildTable() {
  document.getElementsByTagName("caption")[0].textContent = data[0].argument;
  var rowHead = document.createElement("tr");
  var rowBody;
  var rowFoot = document.createElement("tr");
  for(var i = 0; i< data[0].struct.length; i++){
      //HEADER
      var col = document.createElement("th");
      col.setAttribute("scope", "col");
      var colFoot = document.createElement("td");
      colFoot.setAttribute("data-title", data[0].struct[i].name);
      colFoot.setAttribute("id", data[0].struct[i].name);
      var node = document.createTextNode(data[0].struct[i].name);
      var nodeFoot = document.createTextNode(sumCol(data[0].struct[i].name, data[0].elements) );
      col.appendChild(node);
      colFoot.appendChild(nodeFoot);
      rowHead.appendChild(col);
      rowFoot.appendChild(colFoot);
      //FOOT
  }
  var theadElement = document.getElementsByTagName("thead")[0];
  var tfootElement = document.getElementsByTagName("tfoot")[0];
  theadElement.appendChild(rowHead);

  //BODY
  for(elem in data[0].elements){
    rowBody = document.createElement("tr");
    for(var single in data[0].elements[elem]){
      var tagElem = data[0].chiefElem == single ? "th" : "td"
      var colBody = document.createElement(tagElem);
      colBody.setAttribute("scope", "row");
      colBody.setAttribute("data-title", single);
      var nodeBody = document.createTextNode(data[0].elements[elem][single]);
      colBody.appendChild(nodeBody);
      rowBody.appendChild(colBody);
    }
    var tbodyElement = document.getElementsByTagName("tbody")[0];
    tbodyElement.appendChild(rowBody);
    tfootElement.appendChild(rowFoot);
  }
}

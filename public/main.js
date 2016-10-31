// main.js
   



var newName = document.getElementById("projectName");
var del = document.getElementById('delete');

function showForm(){

  document.getElementById("addprojectbutton").style.display = "none";
  document.getElementById("newprojectform").style.display = "block";
}

function showFormRisk(){

  document.getElementById("addriskprojectbutton").style.display = "none";
  document.getElementById("hiddenform").style.display = "block";
}

function updateFunction(pulledthrough){


  var selects = document.getElementsByClassName(pulledthrough);
  for(var i =0, il = selects.length;i<il;i++){
     selects[i].style.border += "1px solid red";
  }
  //alert(pulledthrough);
  var name = "submitbutton" + pulledthrough
  //alert(name)
  document.getElementById(pulledthrough).disabled = false;
  //document.getElementById(submitbutton).style.display = block;
  document.getElementById(name).style.display = "block";
  //$(".lukebutton")[1].style.border = "thick solid #0000FF";
}


//var update = document.getElementById('update')



//alert("newName");

function deleteFunction(pulledthrough){
  //alert(pulledthrough);
    //alert("called");
  fetch('projects', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'ID': pulledthrough
    })
  })
 .then(data => {
  console.log(data)
  window.location.reload(true)
})
}


function riskDelete(pulledthrough){
  alert(pulledthrough);
    //alert("called");
  fetch('riskDelete', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'ID': pulledthrough
    })
  })
 .then(data => {
  console.log(data)
  window.location.reload(true)
})
}

/*function updateForm(pulledthrough){
  alert(pulledthrough)
  return false;
}*/

function updateForm(pulledthrough){

  var dataArray = $(".newform").serializeArray(),
    len = dataArray.length,
    dataObj = {};

for (i=0; i<len; i++) {
  dataObj[dataArray[i].name] = dataArray[i].value;
}

  var d = new Date().toDateString();

  //alert(dataObj['Name']);
  
//update.addEventListener('click', function () {
	//alert(newName.value);
  // Send PUT Request here
  fetch('projects', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'ID' : pulledthrough,
    'Name': dataObj['Name'],
    'Manager': dataObj['Manager'],
    'Owner' : dataObj['Owner'],
    'Type' : dataObj['Type'],
    'RAG' : dataObj['RAG'],
    'Approach' : dataObj['Approach'],
    'Time' : d
    //'Description' : dataObj['Description'],
    //'ProjectRef' : dataObj['ProjectRef']
    //'Owner': 'I find your lack of faith disturbing.'
  })
})
.then(data => {
  console.log(data)
  window.location.reload(true)
})
}

/*del.addEventListener('click', function () {

	alert("called");
  fetch('projects', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'Name': 'Harper SME'
    })
  })
 .then(data => {
  console.log(data)
  window.location.reload(true)
})

})*/
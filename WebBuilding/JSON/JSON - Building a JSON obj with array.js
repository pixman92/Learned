// this code - creates a JSON obj
// then pushes parameterst to the inner array
// then JSON.stringify() the JSON obj
// then parseStr() - parses it back to normal

// the main OBJ
var myJSON = {
  myArray: []
};

var strung = ""     // the stringified string
function add(name, age){    // function pushing data to Array
  myJSON.myArray.push({
    "name": name,
    "age": age
  });
  
 return strung = JSON.stringify(myJSON);    // stringifiing the data

 }

function parseStr(){
  return JSON.parse(strung);    // remaking the data structure back to Array
}
 
  


function populate(){
    document.getElementById('mainList').innerHTML = "";
    console.log('bigarray', BIGArray);
    for(var i = BIGArray.length-1; i>=0; i--){
      document.getElementById('mainList').innerHTML += "<div><li id='text"+i+"''>" + BIGArray[i] +"</li>"+"<button class='xers' id="+i+">X</button></div>";
    }
  }


  //=========================================

  //removing item from BIGArray
  function deleteFromBIGArray(index){
    BIGArray.splice(index, 1);
    console.log(BIGArray);
  }


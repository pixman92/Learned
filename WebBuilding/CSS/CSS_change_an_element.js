function changeCSS(select, cssArray){
  //function that Removes ClassList
  //then adds back that that DOM element
  // this only works because elem is stored in Memory
  var myArray = [];
  
  var elem = document.getElementsByClassName(select);
  for(var i=0; i<elem.length; i++){
     myArray.push(elem[i]);     
  }  
  myArray.forEach((item, index)=>{
    console.log(myArray);
    myArray[index].removeAttribute('class');
    myArray[index].classList.add(select);
  });
  
  for(var ii=0; ii<elem.length; ii++){
    cssArray.forEach((item, index)=>{
      myArray[ii].classList.add(item);
    });
  }  
}


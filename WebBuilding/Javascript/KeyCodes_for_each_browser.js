document.getElementById('idElement').addEventListener('keydown', (event)=>{
  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyIdentifier !== undefined) {
    code = event.keyIdentifier;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
  }
  // console.log('test'); 
  // console.log('code', code); 
  if (code === "Enter") {   
    //do stuff
  }
});

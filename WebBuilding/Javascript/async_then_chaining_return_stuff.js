//code that chains, async, and returns value, to be compared with
//to be compared with, after returning from async task


promise.then(()=>{
  //first round of stuff
})
.then(()=>{
  //second round of stuff
  return var1
})
.then((var1)=>{
  if(var1 == something){
    return true;
  }else{
    return false
  }
});

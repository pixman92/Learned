function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

async function runMe(){
  for(var i=0; i<5; i++){
        await wait(2000).then(()=>{
          console.log("hey there", i);
        });

    
  }
}

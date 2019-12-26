//function that takes abstracted wait(timeout) - funciton
//then used in an usual function
//async and await on the wait function, allows for pause in the forLoop!

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

async function runMe(){
  for(var i=0; i<5; i++){
        await wait(2000).then(()=>{
        });
        console.log("hey there", i);    
  }
}

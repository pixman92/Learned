//defines the function
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

//promises
wait(500).then(()=> doSomething())


//async/await
await wait(500)
doSomething
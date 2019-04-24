//defines the wait function() - for timing out a task
//partically useful in Firestore
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

//promises
// wait(500).then(()=> doSomething())


//async/await
await wait(500)
doSomething()


//set an infinite loop, if the function() completes - end loop
//else, continue loop until condition is met
//wait 2.0

function runAll(){
    one()
    two()
    three()
}

function one(){
    stuff...
    if(stuff==undefined){
        one();
    }
}

function two(){
    stuff2...
    if(stuff2==undefined){
        two();
    }
}

function three(){
    stuff3...
    if(stuff3==undefined){
        three();
    }
}








//========================================
function wait(timeout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

//======================================
await wait(time).then(()=>{});

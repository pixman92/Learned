//function tree of awaits
//guarantees order of execution

//to make dynamic param -> nospecific, (1st) then param (2nd)

async function main (num){
    try{
        let hello = await one();
        let goodbye = await two(hello, num);        //hello HAS to be same, num can be whatever!
        let nope = await three(goodbye);            //goodbye HAS to be same
    }catch(e){
        console.log(e);
        throw e;
    }

}

async function one(){
    console.log('first');
}

async function two(tmp, num){
    console.log('second ' + num);
}
async function three(){
    console.log('third');
}

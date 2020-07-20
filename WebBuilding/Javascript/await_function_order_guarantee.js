//function tree of awaits
//guarantees order of execution

//to make dynamic param -> nospecific, (1st) then param (2nd)

async function main (num){
    try{
        let first = await one();
        let second = await two(first);        
        let third = await three(second);            
    }catch(e){
        console.log(e);
        throw e;
    }

}

async function one(){
    console.log('first');
}

async function two(){
    console.log('second');
}
async function three(){
    console.log('third');
}

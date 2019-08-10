//========================================
// functions that make Toggle Logic
function add(elem){
    textArr.push(elem);
    return textArr;
}

function remove(i){
    // for(var i in textArr){
    //     if(textArr[i]==elem){
            textArr.splice(i, 1);
    //     }
    // }
    return textArr;
}


var withinArray = [];
function decide(elem){

    
    for(var i in textArr){
        
        if(textArr[i] == elem){
            console.log('remove forLoop');
            // remove(i);
            withinArray.push(i);
        }
        // else 
    }
    console.log('withinArray1', withinArray);
    if(withinArray.length==0){
        console.log('add');
        add(elem);
    }else{
        console.log('removeElse');
        console.log('withinArray2', withinArray);
        remove(withinArray[0]);
        withinArray=[];
    }
    
    makeStr();

}

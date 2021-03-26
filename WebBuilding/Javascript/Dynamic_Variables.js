//code that allows for dynamic Variables - with unique names - to be made

var obj = {};
//==========================
function makeDynamic(str, data){
    obj[str] = data;
    return obj;
}

function addData(str, data2){
    obj[str] += 'hello';
    console.log('obj', obj); 
}

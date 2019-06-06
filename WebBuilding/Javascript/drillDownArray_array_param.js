
// function that pulls in an array, then drills (recursively) through indexes that are passed in an 'array parameter'
// an example
// arr = ['hello', 'my name is', 'charles']
// drillDownArray(arr, [0, 2]);
var arrSaved=[];
function drillDown(arrayOfValues, pathPos){
    arrayOfValues = arrayOfValues[pathPos[0]];

    console.log({arrayOfValues}, );
    console.log(pathPos.length );
    
    if(pathPos.length>0){
        pathPos.shift();
        arrSaved.push(arrayOfValues);
        drillDown(arrayOfValues, pathPos);
    }
    return arrSaved[arrSaved.length-1];
}


// Example:
// var arr = [1, 2, [11, 12, 13], 3, 4];
// drillDown(arr, [2])      //output -  [11, 12, 13]
// drillDown(arr, [2, 0])   //output - 11

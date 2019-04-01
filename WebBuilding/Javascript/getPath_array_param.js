
// function that pulls in an array, then drills (recursively) through indexes that are passed in an 'array parameter'
// an example
// arr = ['hello', 'my name is', 'charles']
// drillDownArray(arr, [0, 2]);
function drillDownArray(arrayOfValues, pathPos){
    var returnedArray=[];
    for(var i=0; i<pathPos.length;i++){
        console.log('val', returnedArray.push(arrayOfValues[pathPos[i]]));
    }
    return  returnedArray;
}
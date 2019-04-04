
// function that pulls in an array, then drills (recursively) through indexes that are passed in an 'array parameter'
// an example
// arr = ['hello', 'my name is', 'charles']
// drillDownArray(arr, [0, 2]);

var returnedArray=[];
function drillDownArray(arrayOfValues, pathPos){
    if(returnedArray==""){
        returnedArray = arrayOfValues;
        console.log('returnedArray', returnedArray);
    }
    for(var i=0; i<pathPos.length;i++){
        console.log('val', returnedArray = returnedArray[pathPos[i]]);
        if(i==pathPos.length-1){
            returnedArray=[];
        }
    }
}


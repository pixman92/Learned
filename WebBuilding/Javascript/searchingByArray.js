//code that uses array[] to search through data

var pathReturnedValue = "";
var pathTaken = "";

function nodeBasedOnArray(pathPos){
    console.log('FREAKING AWESSOME FUNCTION - that takes in the initial path, then an array of nodes to drill down to nodes based on pos in that parameter array');



    for(var i=0; i<=pathPos.length;i++){
        console.log('path', path);
        console.log('i', i);
        console.log(arrayMe[pathPos[i]]);
    }
    
    return  pathReturnedValue = arrayOfVal[pathPos[pathPos.length-1]];

}
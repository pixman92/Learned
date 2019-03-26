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


//========================================
// 2nd version - same concept...
// searching through an array of JSON data using index(es) 

var swapArray=[];
function getPath (arrMe) {
    var manipulateMe=[];
    swapArray=[];
    var i=0;
    while(i<arrMe.length){
        if(manipulateMe.length==0){
            // console.log('manipulateMe1', manipulateMe);
            manipulateMe = JSON.parse(localStorage.getItem('tabs')); // JSON/BIG array to pull from 
        }else{
            manipulateMe = swapArray;
            console.log('manipulateMe2', manipulateMe);

        }
        swapArray = manipulateMe[arrMe[i]];
        console.log('swapArray', swapArray);
        i++;
    }
}
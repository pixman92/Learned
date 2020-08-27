//code that takes an Array[], pulls out the indexes of 'Reoccuring items'
//then another for() loop, to splice those items out, based on their indexes

data = ['d', 'o', 'l', 'l', 'a', 'a', 'r']
var index = 0;
var returnArray = [];
var indexOfDuplicates = [];
for(var i=1; i<data.length; i++){
    console.log(i);
    for(var index=0; index<data.length; index++){
        if(data[index] == data[i++]){  
            console.log(data[index] +'.....'+data[i]);
            indexOfDuplicates.push(i);
        }     

    }
}

console.log(returnArray)

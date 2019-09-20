// this file - takes in Gator library
// it matches 2 e.targets
// 1 - a span over all the TAG words that I have saved in an array
// 2 - over check boxes

// 1, is easy just Gator over the span
// 2, is tricky, it's necessary to grab the data, placed in the HTML className field
// then it pulls that into a variable. Next it compares to see if that variable already has an index in the array[]
// it will toggle between Adding/Removing elements in the Array



var superArrayOfTAGS = [];
var tmpE;
var checked;
var myTmpTag;
var testE;
function whatIsChecked(){
    //function that adds eventListeners to tags, 
    //making them print console.log();
    
    Gator(document.getElementById('printTags')).on('click', (e)=>{
       //function to add/remove elements to array of TAG searching
        
        myTmpTag;
        testE = e.target;
        

        if(e.target.matches('span')){           //here we match with spans
            // console.log('matched', e.target.innerHTML);
            tmpE = e;
            myTmpTag = e.target.innerHTML;      //next, extract e.target


            var status = document.getElementsByClassName(testE.className)[0];       //make a status var, to toggle ON/OFF


            // adding/removing elements in an array
            if(superArrayOfTAGS.indexOf(myTmpTag)==-1){
                superArrayOfTAGS.push(myTmpTag);
                
                status.checked=true;

            }else{

                status.checked=false;

                var index = superArrayOfTAGS.indexOf(myTmpTag);
                superArrayOfTAGS.splice(index, 1);
            }
            
            // console.log('superArrayOfTAGS1', superArrayOfTAGS);


        }       
        

        if(e.target.matches('input')){          //matching to 'input'(s)
     
        
            var status = document.getElementsByClassName(e.target.innerHTML);
            var inputChecking = document.getElementsByClassName(testE.className)[0].className;

            

            if(superArrayOfTAGS.indexOf(inputChecking)==-1){
                status.checked=true;
                superArrayOfTAGS.push(inputChecking);
            }else{
                status.checked=false;
                var index = superArrayOfTAGS.indexOf(inputChecking);
                superArrayOfTAGS.splice(index, 1);
            }

            // console.log('superArrayOfTAGS2', superArrayOfTAGS);

        }
        
        
        
        
            // if(superArrayOfTAGS.indexOf(myTmpTag)==-1){
            //     superArrayOfTAGS.push(myTmpTag);
            // }else{
            //     var index = superArrayOfTAGS.indexOf(myTmpTag);
            //     superArrayOfTAGS.splice(index, 1);
            // }

            console.log('superArrayOfTAGS', superArrayOfTAGS);

    });
}
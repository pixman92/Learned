// this file - 


var superArrayOfTAGS = [];
var tmpE;
var checked;
var testE;
var myTmpTag;
function whatIsChecked(){
    //function that adds eventListeners to tags, 
    //making them print console.log();
    
    Gator(document.getElementById('printTags')).on('click', (e)=>{
       //function to add/remove elements to array of TAG searching
        
        myTmpTag;
        testE = e.target;

        if(e.target.matches('span')){
            // console.log('matched', e.target.innerHTML);
            tmpE = e;
            myTmpTag = e.target.innerHTML;

            if(superArrayOfTAGS.indexOf(myTmpTag)==-1){
                superArrayOfTAGS.push(myTmpTag);
            }else{
                var index = superArrayOfTAGS.indexOf(myTmpTag);
                superArrayOfTAGS.splice(index, 1);
            }
            
            // console.log('superArrayOfTAGS1', superArrayOfTAGS);


        }       
        

        if(e.target.matches('input')){
     
        
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
// (rough idea - to be tested)
//code to be called when starting a new chain of promises
//change the passed code to see if .then() - has finished

var passed;
function passedTrue(){
    return passed=true;    
}
function passedFalse(){
    return passed=false;
}

function passedReset(){
    done=false;
}

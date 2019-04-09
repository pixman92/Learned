

// UNDER DEVELOPMENT
// code that finds the matching param (currently email) within a Firebase path
var arrayOfPosOfMatches = [];
async function getEmail(meEmail){
    console.log('critical funciton !!! that will redirect all other funcitons to act on the path set aside by this return of index', );
    await pathLoop('users');
    for(var i in arrayOfVal){
        if (arrayOfVal[i].email == meEmail){
            console.log(makeStr(['the index of the email is:', i]));
             arrayOfPosOfMatches.push(i);
        }
    }
    
}
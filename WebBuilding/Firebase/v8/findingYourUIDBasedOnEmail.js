//this code takes an email
//finds it (or doesn't)
//then pushes the found UID to a variable


var userUID = "";
var savedUIDstr ="";
async function pullEmailGetUID(emailSearch){
    //pull - that uses ALL method
    // async function pull(_callback){
    var savedArrayUID = []; var savedArrayEmails = [];
    await db.collection("YouTube").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            savedArrayUID.push(doc.id);
            savedArrayEmails.push(doc.data());
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    }).then(()=>{
        runningThroughSavedArrays(savedArrayEmails, savedArrayUID, emailSearch)
    });
}

function runningThroughSavedArrays(savedArrayEmails, savedArrayUID, emailSearch){
    //function that takes the arrays, and runs through them
    //to find the corresponding email
    var foundMe = false;
    savedArrayEmails.forEach((item, index)=>{
        // console.log(item) 
        // console.log(item.email)
        // console.log('index', index);
        
        if(item.email==emailSearch){
            console.log('Found at ', index, ' index');
            console.log( '=====\n', savedArrayUID[index]);

            savedUIDstr = savedArrayUID[index];
            foundMe = true;
        }
        if(index>=savedArrayEmails.length-1 && foundMe==false){
            console.log('not found');
        }
    });
}

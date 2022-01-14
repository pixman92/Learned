
//this code makes an object with name <firstName>
//then adds <dataString> to the obj
//then adds the obj to the Firebase database
//based on UID from a Email search function
function addToDodBasedOnUID(firstName, dataString){
    var obj = {};
    obj[firstName.toString()] = dataString;
    
    try{
        db.collection('YouTube').doc(savedUIDstr).set(obj, {merge: true});

    }catch(err){
        console.log('Errored out, ', err);
    }

}

//file that deals with creating firestore profiles of paterons
const db2 = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};  //docdata.date.toDate();
db2.settings(settings);


function addDataToFirestoreForCompletelyNew(path, data){   
    db2.collection(path).add(data).
    catch((error)=>{
        console.error('error caught', error);
    });   
}

var dataMe = []; var firestorePaths = [];
var slashCount = 0;
async function queryData(path){
    dataMe=[]; firestorePaths=[];
    await db2.collection(path).get().
    then(async (snap)=>{
        snap.forEach(async (doc)=>{
            // console.log('data', doc.data);
            await dataMe.push(doc);
            
        });
        for(var i=0; i<dataMe.length; i++){
            firestorePaths.push(dataMe[i].ref.path);
        }
        console.log('firestorePaths', firestorePaths);
    });  
}


//================================================


var savedDoc=[];
function pullDataFromFirestore(path){
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc.data());
                savedDoc.push(doc.data());
            }else{
                console.log('no doc');
            }
        }); 
    }
    if(isOddOrEven(path)=="even"){
        db2.collection(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc);
                savedDoc.push(doc);
            }else{
                console.log('no doc');
            }
        });
    }
}

function isOddOrEven(str){
    if((str.split('/').length-1)%2==0){
        return "even";
    }else{
        return "odd";
    }
}

//NEXT? - figuring out how to compile all 'fields'
function pullFields(path){

}

//NEX? - working to get multi layered collections
//================================================

//where function 
var docdata; var docId; var docMe=[]; var afterDate; var beforeDate;
var whereFinderPaths = [];
var docDataArray=[];
function whereFinder(inputDate){    //function used in outputting.js to be used with date passed to this function
    //function that takes in an input date,
    //then calls where() for all logins before and after the date given

    //reseting whereFinderPaths[] 
    whereFinderPaths = [];
    docDataArray=[];

    var newDate = new Date(inputDate);
    afterDate = new Date();
    beforeDate = new Date();
    afterDate.setDate(newDate.getDate()+1);
    beforeDate.setDate(newDate.getDate()-1);
    // input = inputDate.setHours(0,0,0,0);
    db2.collection('paterons').where('date', '<', afterDate).where('date', '>', beforeDate)
    .get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            docdata = doc.data();
            docDataArray.push(docdata);
            console.log('doc.data()', doc.data());
            docId = doc.id;
            docMe.push(doc);

        });
        for(var i in docMe){
            whereFinderPaths.push(docMe[i].ref.path);
        }
    });

    //return docDataArray!!!!
} 

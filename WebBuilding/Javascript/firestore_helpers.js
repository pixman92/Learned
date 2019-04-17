//file that deals with creating firestore profiles of paterons

var db2 = firebase.firestore();

function addDataToFirestore(path, data){   
    db2.collection(path).add(data).
    catch((error)=>{
        console.error('error caught', error);
    });   
}

function pullDataOdd(path){
    db2.collection(path).get().
    then((doc)=>{
        // console.log('docdata', doc.data());
        if(doc.exists){
            console.log('doc', doc);
        }else{
            console.log('no doc');
        }
    });
}

function pullDataEven(path){
    db2.doc(path).get().
    then((doc)=>{
        // console.log('docdata', doc.data());
        if(doc.exists){
            console.log('doc', doc.data());
        }else{
            console.log('no doc');
        }
    });
}

//================================================

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
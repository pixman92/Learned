var db;
window.onload=()=>{
    makeInstance()
//     console.log('hey!');
}

function makeInstance(){
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
}

function adding(root, data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection(root).add(data);

}

function addDoc(root, docMe, data){
    //function to push updated data up to firebase
    db.collection(root).doc(docMe).set(data, {merge: true});
}


//===================================
var wholeDoc=[];
var allPathsReturnred=[];
async function getting(main, docMe, callback){
    //pulls either ood/even fields stored in Path
    wholeDoc=[];

    try{
    let first = await one();
    let second = await two(first);
    let third = await three(second);

    }
    catch(e){
        throw(e);
    }   

    async function one(){
        await db.collection(main).doc(docMe).get().then(async (snap)=>{
            console.log(snap.data());
            await wholeDoc.push(snap.data());
        });

    }

    async function two(){
        await db.collection(main).doc(docMe).get().then(async (doc)=>{
            console.log(doc.id);
            await allPathsReturnred.push(doc.id);   
        });

    }

    async function three(){
        console.log('wholeDoc: ', wholeDoc);
        console.log('allPathsReturnred: ', allPathsReturnred);
        callback();
        

    }

}

//========================================

var getAllArr=[]; var getAllId=[]; var bigPATH="";
async function getAll(root, callback){
    getAllArr=[]; getAllId=[];
    //gets all the fields in the Path

    try{
        let first = await one();
        let second = await two(first);
        // let third = await three(second);
    
    }
    catch(e){
        throw(e);
    }   

    async function one(){
        await db.collection(root).get().then(async (snap)=>snap.forEach(async(doc)=>{
            await getAllId.push(doc.id);
            await getAllArr.push(doc.data());
            // console.log('getAllArr', getAllArr);
            // console.log('getAllId', getAllId);
            console.log(doc.id, '===>', doc.data());
    
        }));

    }

    async function two(){
    
        if(getAllId){
            bigPATH = root;
        }
        callback();

    }

}
//=============================================
//where function stuff
var whereIds=[];
async function whereMe(root, first, second, callback){
    whereIds=[];
    var tmp; var tmp2;
    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
    
    }
    catch(e){
        throw(e);
    }   

    async function one(){
        tmp = db.collection(root);
    
        tmp2 = tmp.where(first, '==', second)

    }

    async function two(){
        await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            console.log(doc)
            await whereIds.push(doc.id);
        }));

    }

    async function three(){
        console.log(whereIds);
        
        callback();

    }




}

//========================================
function secsToDate(seconds) {
    //function takes seconds from doc.data()
    //converts to a whole date String
    var newD = new Date(1970, 0, 1);

    newD.setSeconds(seconds);

    return newD;
}

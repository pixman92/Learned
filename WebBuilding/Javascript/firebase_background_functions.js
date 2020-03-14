function adding(root, data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection(root).add(data);

}

function addDoc(root, docMe, data){
    //function to push updated data up to firebase
    db.collection(root).doc(docMe).set(data, {merge: true});
}

var wholeDoc=[];
async function getting(main, docMe){
    //get specific root to doc
    wholeDoc=[];
    await db.collection(main).doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeDoc.push(snap.data());
    });

}

var getAllArr=[];
async function getAll(root, callback){
    //pull all data from whole 'path'
    await db.collection(root).get().then(async (snap)=>snap.forEach(async(doc)=>{
        await getAllArr.push(doc.data());
        console.log('getAllArr', getAllArr);
    }));
    callback();
}


//=============================================
//where function stuff
var whereIds=[];
async function whereMe(root, first, second){
    //find based on matching criteria
    tmp = db.collection(root);

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc)
        await whereIds.push(doc.id);
    }));


}
//========================================
function secsToDate(seconds) {
    //function takes seconds from doc.data()
    //converts to a whole date String
    var newD = new Date(1970, 0, 1);

    newD.setSeconds(seconds);

    return newD;
}

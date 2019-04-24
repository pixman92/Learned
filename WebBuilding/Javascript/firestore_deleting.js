//Code that deleteings nodes in Firestore database

// queryData('users')
// pullDataFromFirestore(firestorePaths[0])
// deleteStuff('users', savedDoc[0].date.toDate())
function deleteStuff(path, date){
    var deleting = db2.collection(path).where('date', '==', date);
    deleting.get().then((snap)=>{
        snap.forEach((doc)=>{
            console.log('doc', doc);
            doc.ref.delete();
    })}).then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
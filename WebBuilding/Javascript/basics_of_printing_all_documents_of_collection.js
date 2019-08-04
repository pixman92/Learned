
//snippet of Code that pulls all documents from a collection
// then logs them
await db.collection("/chatrooms/"+roomID+"/messages/").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
    });
    
});

// https://firebase.google.com/docs/firestore/query-data/queries


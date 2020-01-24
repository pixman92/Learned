//funciton that pulls from database - all docs from a collection

db.collection(collection).get().then(async (snap)=>{
    snap.forEach(doc =>{
        console.log(doc);
    });
});

    

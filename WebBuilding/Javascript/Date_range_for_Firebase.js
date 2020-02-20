// how to compare dates and search for them in Firestore

newDateLess = new Date('Dec 29, 2019')

var newDateMore = new Date('Dec 30, 2019')



db.collection('paterons3').where("dateMe", "<", newDateMore).where("dateMe", ">", newDateLess).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            basedOnDate.push(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

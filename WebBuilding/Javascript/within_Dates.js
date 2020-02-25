//function that takes in Date and path 
//(for data withinn Firebase, that is stored by Date (timestamp - seconds))


var basedOnDate = [];

function withinDates(path, inputMe){

    // date = new Date(dateMe); 
    originDate = new Date(inputMe);
    originDate = new Date(originDate);
    afterDate = new Date(originDate);
    beforeDate = new Date(originDate);

    afterDate = afterDate.setHours(23, 59, 59, 0);
    beforeDate = beforeDate.setHours(0, 0, 0, 0);

    afterDate = new Date(afterDate);
    beforeDate = new Date(beforeDate);


    db.collection(path).where("dateMe", "<", afterDate).where("dateMe", ">", beforeDate).get()
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
}

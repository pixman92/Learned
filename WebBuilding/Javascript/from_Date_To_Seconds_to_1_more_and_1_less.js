// function that takes date, 
// adds 1 seconds
// subtracts 1 second
// then finds the date based on those date objects


function findRoom(date){

    // date1 = new Date("May 26,2019 7:48:05 PM");      // requires, Text Month, no 'at' and space before AM/PM
    // date2 = new Date("May 26,2019 7:48:07 PM");


    // "July 19, 2019 3:23:19 PM"
    
    date = new Date(date);

    var secondsLess = date.getTime()/1000;
    secondsLess -= 1;
    console.log(secondsLess);

    var secondsMore = date.getTime()/1000;
    secondsMore += 1;
    console.log(secondsMore);


    var newDateLess = new Date(null);
    newDateLess.setTime(secondsLess*1000);
    var newDateMore = new Date(null);
    newDateMore.setTime(secondsMore*1000);

    debugger



    db.collection("/chatrooms").where("date", "<", newDateMore).where("date", ">", newDateLess).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}

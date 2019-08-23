//code that takes an array of Obj{}
//

for(var i=0; i<savedMessagePaths.length; i++){
    var tmp = savedMessages[i].date.seconds;
    var date = new Date(null);
    date.setTime(tmp*1000);

    // console.log('date', date);

    storedDates.push(date.toString());
}
console.log('storedDates', storedDates);

//seconds to date

var newD = new Date();
newD.setSeconds(seconds);

db2.collection(path).where('date', '==', newD);
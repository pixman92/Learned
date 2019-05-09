//seconds to date

var newD = new Date();
newD.setSeconds(seconds);

db2.collection(path).where('date', '==', newD);


//pulling seconds from web
// id = date

var toSecDate = new Date('<date>');
toSecDate.getTime()/1000;
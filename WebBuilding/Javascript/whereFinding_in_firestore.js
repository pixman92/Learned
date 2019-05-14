//where function 
var docdata; var docId; var docMe=[]; var afterDate; var beforeDate;
var whereFinderPaths = [];
function whereFinder(inputDate){
    //function that takes in an input date,
    //then calls where() for all logins before and after the date given

    //reseting whereFinderPaths[] 

    dateLessTmp = new Date();
    dateLessTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() - 1);

    dateMoreTmp = new Date();
    dateMoreTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() + 2);

    var dateLess = new Date(dateLessTmp);
    // dateLess.setSeconds(dateLessTmp);

    var dateMore = new Date(dateMoreTmp);


    // whereFinderPaths = [];

    // var newDate = new Date(inputDate);
    // afterDate = new Date();
    // beforeDate = new Date();
    // afterDate.setDate(newDate.getDate()+1);
    // beforeDate.setDate(newDate.getDate()-1);
    // input = inputDate.setHours(0,0,0,0);
    db2.collection('dummy').where('date', '<', dateMore).where('date', '>', dateLess)
    .get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            docdata = doc.data();
            console.log('doc.data()', doc.data());
            docId = doc.id;
            docMe.push(doc);
        });
        for(var i in docMe){
            whereFinderPaths.push(docMe[i].ref.path);
        }
    });
} 

//================================================
//important!
//turns timestamps into seconds
//to convert back?? - data.time.toDate()
const settings = {/* your settings... */ timestampsInSnapshots: true};  //docdata.date.toDate();
db2.settings(settings);
//================================================

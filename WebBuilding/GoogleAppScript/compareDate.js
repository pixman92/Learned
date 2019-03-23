//function that determines an old date in a Cell
// and if that date +5 has passed today
function dateJoined(){
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getRange(2, 3, sheet.getLastRow());
    var values = range.getValues();
    
    Logger.log(values);
    Logger.log(new Date(values[0][0]));
    
    var today = new Date(today);
    
    var oldDate = new Date(values[0][0]);
    var futureDate = new Date(values[0][0]);
    var tmpDate = new Date(futureDate.setDate(oldDate.getDate()+5));
    
    
  //  Logger.log(futureDate.setDate(oldDate.getDate()+5));
    Logger.log(futureDate);
    
  //  if(today>values[0][0]){
  //    Logger.log('old');
  //  }
    
  }
    
//function that compares a date, the days passed and if that has passed (time wise)
  function comparison(studentJoinDate, daysPassed){ 
    var todayDate = new Date();
    
    studentJoinDate = new Date(studentJoinDate);
    
    var oldDate = new Date(studentJoinDate);
    var futureDate = new Date(studentJoinDate);
    var tmpDate = new Date(futureDate.setDate(oldDate.getDate()+daysPassed));
    
    
    if(todayDate>tmpDate){
      Logger.log("it has passed");
    }else{
      Logger.log("not yet");
    }
  }
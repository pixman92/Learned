
//function that detects true from false
function detectMarked(){
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getRange(2, 2, sheet.getLastRow());
    var values = range.getValues();
    
    Logger.log(values);
    Logger.log("range"+range);  
    var savedNames = [];
   
    for(var i=0, j=2; i<values.length; i++, j++){
    //    savedNames.push(values[i]);
      Logger.log('values.length ' + values.length);
      if(values[i][0]==true){
        savedNames.push(sheet.getRange(j, 1).getValue());
      }
    }
    Logger.log(savedNames);
}
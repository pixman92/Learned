//take first param
//eval the heck out of 'tmp'

//create new 'myObj' = { }
//'push' data to myObj, using eval()

var tmp = req.params.first;
var firstMe = 'tmp';
var myObj = { };
myObj[eval(firstMe)] = req.params.second;

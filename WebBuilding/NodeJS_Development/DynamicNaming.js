
//first param = 'something'
//that gets filtered (as a string) - to a new variable
//then is evaluated

var tmp = req.params.first;
var me = 'tmp';
res.send(eval(me));

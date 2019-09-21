//code that uses for loop
//gets current 

function progressDays(runs) {
	var totalProgress=0;
	var current; var previous;
	for(var i=0; i<runs.length; i++){
		current = runs[i];
		if(current > previous){
			totalProgress+=1;
		}
		previous = current;
	}
	return totalProgress;
}

var tmp = [3, 4, 1, 2];

progressDays(tmp)
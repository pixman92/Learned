//this code hides and shows html elements found in an array
// can be replaced by CSS (opacity:0/1)
var arrayMe = ["open", "save"];
function hide(){
        for (var i = 0; i < arrayMe.length; i++) {
            document.getElementById(arrayMe[i]).style.display='none';
        }

}

function show(id){
    document.getElementById(id).style.display='block';
}
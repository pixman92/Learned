//code that adds 'event delegation' (fancy term)
//basically - add events to parent elem
//then if the button press of children elem(s) match
//the command is fired
function addListenerDelete(){
    document.getElementById('grid').addEventListener('click', (e)=>{
        if(e.target && e.target.matches(".deleteButton")){
            console.log('time lapsed?', e.target.id );
        }
    });



    // console.log(docDataArray[i].date.toDate());
}
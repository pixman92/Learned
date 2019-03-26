
// 2 functions that attach EventListeners to any element and sets the 'callback()' - function - and then 2nd function to remove it
function eventForIdElem(id, callback, param){
    Gator(document.getElementById(id)).on('click', ()=>{
        callback(param);
    });
}
function eventOff(id){
    Gator(document.getElementById(id)).off();
}

//function for changing 'editable' div - event listener? - use -> 'input'
Gator(document.getElementById('personalStatus')).on('input', ()=>{
    console.log(document.getElementById('personalStatus').innerText);
});
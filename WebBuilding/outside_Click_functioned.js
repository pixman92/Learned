function eventListeners(){
  document.getElementsByClassName('changeMe')[0].addEventListener('click', ()=>{
    change();
  });
}

eventListeners();

function change(){
  document.getElementsByClassName('changeMe')[0].setAttribute("contenteditable", "true");

}

function print(){
   var text = document.getElementsByClassName('changeMe')[0].innerText;
  console.log(text);
}


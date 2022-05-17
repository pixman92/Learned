<div class="outer">
  <div class="changeMe">Hello</div>
</div>

// =================
function change(){
  document.getElementsByClassName('changeMe')[0].setAttribute("contenteditable", "true");

}

function printMe(){
   var text = document.getElementsByClassName('changeMe')[0].innerText;
  console.log(text);
}

function eventListeners(){
  document.getElementsByClassName('changeMe')[0].addEventListener('click', ()=>{
    change();
  });
  
  
  window.addEventListener('click', function(e){   
    if (document.getElementsByClassName('changeMe')[0].contains(e.target)){
      // Clicked in box
      console.log('in');
    } else{
      // Clicked outside the box
      console.log('out');
      printMe();
    }
  });

}

eventListeners();

// =================

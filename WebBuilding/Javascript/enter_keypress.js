//code that causes an "enter" keypress to run a function

document.getElementById('saveText').addEventListener('keydown', (e)=>{
        if(e.keyCode === 13){
            e.preventDefault();
            sentence(document.getElementById('saveText').value);
        }
    });

//file for taking in HTML strings 
//then imports them into innerHTML

class InnerMe{
    constructor(){
        this.HTMLString="";
        this.innerString="";
    }
  
    //code that uses .inner()
    //takes in:
      //HTMLString - code to add
      //innerString - where to add code
      //addOrNot - whether to override or not
    inner(HTMLString, innerString, addOrNot){
        if(addOrNot==true){
            document.querySelector(innerString).innerHTML += HTMLString;
        }
        if(addOrNot==false){
            document.querySelector(innerString).innerHTML = HTMLString;
        }
    }
}

//this file makes a JS Class for OOP objects of CSS commands

//how does it work?
//-make a MakeCSS object
//-add CSS elements to an internal Array
//-apply the CSS, index by index

//REMEMBER
//max? - goes down
//min? - goes up

============
https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js

//Enquire CSS Library

===========
<div id="test">
  Hello
</div>

==========
// document.querySelector(element).style[style] = change;

class MakeCSS{
  meCSSArray = [];
  
  addCSS(element, style, value){
    this.meCSSArray.push([element, style, value]);
  }
  
  makeCSS(index){
    console.log(this.meCSSArray[index]);
  }
  
  applyCSS(index, minOrMax, screenSize){
    if(!minOrMax||!screenSize){
      console.error("NOT defined");
    }else{
      if(minOrMax=='min'){
        enquire.register("screen and (min-width: "+screenSize+")", ()=>{    

        document.querySelector(this.meCSSArray[index][0]).style[this.meCSSArray[index][1]] = this.meCSSArray[index][2]
    });
        console.log('min');
        
      }
        if(minOrMax=='max'){
          enquire.register("screen and (max-width: "+screenSize+")", ()=>{    

    document.querySelector(this.meCSSArray[index][0]).style[this.meCSSArray[index][1]] = this.meCSSArray[index][2];
    }); 
          console.log('max');
        }
    }
  }
}

function stateOfCSS(){
  var cssTmp = new MakeCSS();
  
  cssTmp.addCSS('#test', 'fontSize', '4em');
  cssTmp.applyCSS(0, 'min', '400px');
  
  cssTmp.addCSS('#test', 'fontSize', '1.8em');
  cssTmp.applyCSS(1, 'max', '400px');
  
  cssTmp.addCSS("#test", 'border', '1px');
  cssTmp.applyCSS(2, 'min', '400px');
  
  cssTmp.addCSS("#test", 'border', '2px green solid');
  cssTmp.applyCSS(3, 'max', '400px');
  cssTmp.addCSS('#test', 'fontSize', '4em');
  cssTmp.applyCSS(4, 'max', '400px');
  // cssTmp.applyCSS(4, 'min', '400px');
  
}

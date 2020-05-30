
// pull imports
const {el, mount} = redom;


// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
  }
    
  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }
    
  }
  
  printMe(){
    console.log(this.inner);
    console.log(this.mountPoint);
  }
  
}

  
var me = new MountMe();


me.make('#me', 'hello', "");
me.make('#nopeDiv', 'nope', "#me")
me.make('div', 'yup', "#nopeDiv");
me.printMe()

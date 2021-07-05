// a Class file for creating separate JSON obj(s)

class JSON_Instance{
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  
  JSONobj = {
    innerArray:[]
  };
  
  insertJSON(str){
    this.JSONobj = str;
    console.log(this.JSONobj)
  }

  addToObj(passedArray){    
    try{
      var tmpObj = Object.fromEntries(passedArray);
      this.JSONobj.innerArray.push(tmpObj);

    }
    catch(error){
      console.error("Parameter must be a 2D Array")
    }
  }
  
  removeByIndex(indexToRemove){
    this.JSONobj.innerArray.splice(indexToRemove, 1);
  }
  
  saveToLocalStorage(name){
    localStorage.setItem(name, myJSON.stringMe());
  }
  
  pulled = "";
  getFromLocalStorage(name, insertToJSON){
    if(insertToJSON==true){
      this.pulled = localStorage.getItem(name);
      this.JSONobj = this.pulled;
      this.parseMe();
    }else{
      this.pulled = localStorage.getItem(name);  
    }
    
    return this.pulled;
  }
  
  print(){
    return this.JSONobj;
    console.log(this.JSONobj);
  }

  stringMe(){
    return JSON.stringify(this.JSONobj);
  }

  parseMe(){
    this.JSONobj = JSON.parse(this.JSONobj);
    console.log("Parsed!");
    console.log(this.JSONobj);
  }

}


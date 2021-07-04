// a Class file for creating separate JSON obj(s)

class JSON_Instance{
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  
  JSONobj = {
    innerArray:[]
  };

  addToObj(name, age){
    this.JSONobj.innerArray.push({
      "name": name,
      "age" : age,
    });
  }
  print(){
    console.log(this.JSONobj);
  }

  stringMe(){
    return JSON.stringify(this.JSONobj);
  }

  parseMe(){
    return JSON.parse(this.JSONobj);
  }

}

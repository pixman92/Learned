//file for TAB object framework
//first 'Object' - small
//second 'Class' - big

// 2 carries all 1(s) under itself

var SingleTAB = function(title, tabs){
    var tmpDate = new Date();
    this.date = tmpDate;

    this.title = title;
    this.tabs = tabs;
}


class BIGTAB {
    constructor(){
        this.single=[];
    }

    add(data){
        this.single.push(data);
        // return single;
    }
    get(){
        return this.single;
    }


}

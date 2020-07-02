//adds to the 'queried' element
//then removes from that one
//based on <classMe> variable passed

addClass(query, classMe){
    document.querySelector(query).setAttribute("class", classMe);
  }

removeClass(query, classMe){
  document.querySelector(query).classList.remove(addclassMe);
}

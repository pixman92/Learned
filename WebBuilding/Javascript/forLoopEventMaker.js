  // what's special about this code? it uses 'let' over 'var'
  // allowing for new indexes to be made at each turn over of the for loop
  for(let i=0; i<theBIGJSON.JSONobj.innerArray[1].length; i++){
      
      $('.class'+i).on('blur keyup paste input', ()=>{
          console.log('i', i);
          replaceOldWithNew(i, new);    
      });

  }

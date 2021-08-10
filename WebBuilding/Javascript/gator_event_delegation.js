var elem = document.getElementById('id');

    Gator(elem).on('click', 'tag', (event)=>{
        console.log('event', event);


        var target = event.target;
        
        if(target.matches('button')){
            console.log(target);
            console.log("time:", target.id)
            transferingTime=target.id;

        }

    });

//=================
//another way of identifying DOM objs and clicking them
Gator(document).on('click', (event)=>{
    var target = event.target;
    if(target.id == UID){
      console.log('matches, ', UID);
    }
    // debugger;
  });
    

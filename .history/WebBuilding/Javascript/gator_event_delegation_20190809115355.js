var elem = document.getElementById('addingReturnsHere');

    Gator(elem).on('click', 'button', (event)=>{
        console.log('event', event);


        var target = event.target;
        
        if(target.matches('button')){
            console.log(target);
            console.log("time:", target.id)
            transferingTime=target.id;


            //ask whether to delete or no!
            var answer = confirm    ("Delete? Are you sure???");
            
            if(answer!=null){
                linkingToDelete();
            }


        }

    });
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
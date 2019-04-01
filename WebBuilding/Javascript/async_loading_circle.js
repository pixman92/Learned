
//code that shows a loading circle
// then makes it disapear after loading complete
// NOTE: the setTimeout()'s - don't have time
// they are set to only offset the time before/after rendering
// this is due to HTML rendering too fast, it needed to be slowed down

async function me(){
     
    run().then(()=>{
        hide(); show('openPage'); show('spinner');
    }).then(()=>{
        setTimeout(async() => {
            await makeAllCards();
        });        
    }).then(async ()=>{
        setTimeout(async() => {
            document.getElementById('spinner').style.display = "none"
        });        
    });;
    
}

async function run(){}

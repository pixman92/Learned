//=========================================
var doubleWhereIds=[];
var doubleWhereIds2=[];

var tmp; var tmp2; var tmp3;
async function doubleEmail(root, firstParam, thirdParam,  callback){
    doubleWhereIds=[]; doubleWhereIds2=[];
    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
    
    }
    catch(e){
        throw(e);
    }   

    async function one(){
        tmp = db.collection(root);
    
        tmp2 = tmp.where('myEmail', '==', firstParam);
        
        tmp3 = tmp.where('theirEmail', '==', thirdParam);
    }

    async function two(){
        await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            console.log(doc)
            await doubleWhereIds.push(doc.id);
        }));

        await tmp3.get().then(async(snap)=>snap.forEach(async (doc)=>{
            console.log("2nd", doc)
            await whereIds2.push(doc.id);
        }));
    }

    async function three(){

        for(var i=0; i<doubleWhereIds.length; i++){
            for(var j=0; j<doubleWhereIds2.length; j++){
                if(doubleWhereIds[i] == doubleWhereIds2[j]){
                    console.log('matched', doubleWhereIds[i]);
                }
            }
        }

        console.log(doubleWhereIds);
        
        callback();

    }

}

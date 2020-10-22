var doubleWhereIds=[]; var doubleWhereIds2=[];
var doubleWhereIds3=[]; var doubleWhereIds4=[];

var tmp2; var tmp3;
var root;
 var matched = [];
//  var me=[];
 async function doubleEmail(root, firstParam, secondParam, callback){
     //function that takes in 2 emails, and find the matching pair
     // that pair being:
            // myEmail: email1
            // theirEmail: email2

            // myEmail: email2
            // theirEmail: email1
    doubleWhereIds=[]; doubleWhereIds2=[];
    doubleWhereIds3=[]; doubleWhereIds4=[];
    // matched = [];
    firstMine=null; firstTheir=null;
    secondMine=null; secondTheir=null;
    doc1=null; doc2=null;
    doc3=null; doc=null;

    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
        let forth = await four(third);
    
    }
    catch(e){
        throw(e);
    }   

    async function one(){
        root = db.collection(root);

        firstMine = root.where('myEmail', '==', firstParam);
        
        firstTheir = root.where('theirEmail', '==', secondParam);
        //=========================================
        secondMine = root.where('myEmail', '==', secondParam);

        secondTheir = root.where('theirEmail', '==', firstParam);
    }

    async function two(){
        await firstMine.get().then(async (snap)=>snap.forEach(async (doc1)=>{
            // console.log(doc1)
            doubleWhereIds=(doc1.id);
            console.log('1st', doubleWhereIds);
        }));
    // }

    // async function three(){
        await firstTheir.get().then(async(snap)=>snap.forEach(async (doc2)=>{
            doubleWhereIds2=(doc2.id);
            console.log("2nd", doubleWhereIds2);
        }));

    }

    async function three(){
        await secondMine.get().then(async(snap)=>snap.forEach(async (doc3)=>{
            doubleWhereIds3=(doc3.id);
            console.log("3rd", doubleWhereIds3);
        }));

        await secondTheir.get().then(async(snap)=>snap.forEach(async (doc4)=>{
            doubleWhereIds4=(doc4.id);
            console.log("4th", doubleWhereIds4);
        }));
        
    }


    async function four(){

        matched.push([doubleWhereIds, doubleWhereIds2]);
        matched.push([doubleWhereIds3, doubleWhereIds4]);
        // matched.push(doubleWhereIds2); 
        // matched=[];
        // for(var i=0; i<doubleWhereIds.length; i++){
        //     for(var j=0; j<=doubleWhereIds.length; j++){
        //         if(doubleWhereIds[i] == doubleWhereIds[j]){
        //             console.log('matched', doubleWhereIds[i]);
        //             matched.push(doubleWhereIds[i]);
        //         }
        //     }
        // }

        console.log(matched);
        
        callback();

    }

}

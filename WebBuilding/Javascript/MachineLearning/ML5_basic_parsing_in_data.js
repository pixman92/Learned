//BIG data variable - right end = the corrosponding label, 1 to 1, per ML input
var tmpDataForExercies = [
    {'timeTraining': '10min', 'intensity': '100%',      label: 'energized'},
    {'timeTraining': '5min', 'intensity': '75%',        label: 'tired'},
    {'timeTraining': '2min', 'intensity': '10%',        label: 'lazy'},
]


let nn; 
var passedObj;

function exerciseDecision(passedObj){
    const options = {
        inputs: 3,
        outputs: 1,
        task: 'classification'
        // debugger: true
        
    }
    nn = ml5.neuralNetwork(options);

    tmpDataForExercies.forEach(item=>{        // a for Loop! to itterate, each learning param and the label to be selected
        //parsing inputs
        const dataForExercies = {
            'timeTraining': item.timeTraining, 'intensity': item.intensity
        }
        //parsing out the []Array Data to an obj
        const outputs = {
            label: item.label
        }
        nn.addData(dataForExercies, outputs)  // nn.addData(inputs, outputs);    
    });

    nn.normalizeData();
    var options2 = {
    //     epochs: 32,
    //     batchSize: 12
    }
    //train the data -> 0-1
    nn.train(options2, ()=>{});
    
    //classify - or find the MOST likely possibility
    nn.classify(passedObj, (error, results)=>{
        if(error){
            console.log('errorMe', error);
        }else{
            // console.log(results);
            console.table(results);
        }
    });
}

//loop to call for getting a more accuratte reading
function loopMe(repeat, obj){
    for(var i=0; i<repeat; i++){
        makeNeuralDecision(obj);
    }
}

============================

<script src="https://unpkg.com/ml5@0.6.0/dist/ml5.min.js"></script>

//this code creates an HTML element equipped with className, ID and the prefered Element to be wrapped in 
function createHTMLELement(str, element, clName, id){
    console.log('function that adds HTML to front and back of string and then returns that string');
    if(clName==""&&id){
        return '<'+element+' id="'+id+'">' + str + '</'+element+'>';
    }
    if(clName&&id==""){
        return '<'+element+' class="'+clName+'">' + str + '</'+element+'>';
    }
    if(clName&&id){
        return '<'+element+' id="'+id+'" class="'+clName+'">' + str + '</'+element+'>';
    }if(clName==""&&id==""){
        return '<'+element+'>' + str + '</'+element+'>';
    }
}
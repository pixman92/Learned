// max ? - what's lower?
// min ? - what's higer?

//takes use of the enquire.js library
//a functon to attach listeners to DOM
// then execute the called back logic

function addCSS(maxOrMin, screenSize, element, style, change){
  enquire.register("screen and ("+maxOrMin+"-width:"+screenSize+")", ()=>{    
    document.querySelector(element).style[style] = change;
  });
}

// https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js

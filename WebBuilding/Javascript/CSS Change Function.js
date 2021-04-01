
// CSSChange({'query': '#changeMe', 'property': 'fontSize', CSSit: '5em'})
function CSSChange(obj){
  document.querySelector(obj['query']).style.[obj['property']] = obj['CSSit'];
}


// more minimal approach
function CSSChange(query, propertyMe, newStyle){
  // document.querySelector(obj['query']).style.[obj['property']] = obj['CSSit'];
  document.querySelector(query).style.[propertyMe] = newStyle;
}

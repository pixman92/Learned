
// CSSChange({'query': '#changeMe', 'property': 'fontSize', CSSit: '5em'})
function CSSChange(obj){
  document.querySelector(obj['query']).style.[obj['property']] = obj['CSSit'];
}

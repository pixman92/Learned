//uses "..." to populate 'props' pushed into 'render'
var props = { headings: headings, changeSets: data, timestamps: timestamps }; 
ReactDOM.render(<App {...props } />, document.getElementById('container')); 

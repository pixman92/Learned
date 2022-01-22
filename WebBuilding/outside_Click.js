// code that allows function to run - if clicked out of bounds
$(document).click((event) => {
  if (!$(event.target).closest('#element').length) {
    // the click occured outside '#element'
  }        
});

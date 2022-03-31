// code that allows function to run - if clicked out of bounds
$(document).click((event) => {
  if (!$(event.target).closest('#element').length) {
    // the click occured outside '#element'
  }        
});


// =================Example===========

// is for the div -> when pressed -> turned into a TEXTAREA

    $('.deckNameText').on('click', (event)=>{                           //setting up DOM eventlistener
        var savedDeckNameFrontScreen = $('.deckNameText').text();           //saving text before edit
        event.stopPropagation();
        $('.deckNameText').html('<textarea class="deckNameTextArea">'+savedDeckNameFrontScreen+'</textarea>')       //transfer to NEW HTML

      
        console.log('SavedText: ' , savedDeckNameFrontScreen);
        $('.deckNameText').off();
});       

// when clicked outside, save the change!
$('body').on('click', (event) => {                                              //event for, clicking outside
        if (!$(event.target).closest('.deckNameTextArea').length) {                     // if click is outside
            // the click occured outside '#element'
            console.log('i ran out of the box');     
            holding1 = $('.deckNameTextArea').val(); 
            $('.deckNameText').html();                                          //reset html
            $('.deckNameText').html('<div>'+ holding1 + '</div>');
        }        
     $('body').off();
     makeThemEditable();
});

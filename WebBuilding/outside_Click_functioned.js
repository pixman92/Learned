function outOfCode(clickedItem, closestElement){
  
  // code that allows function to run - if clicked out of bounds
//   $(document).click((event) => {
//     if (!$(event.target).closest('#'+closestElement).length) {
//       // the click occured outside '#element'
//     }        
//   });


  // =================Example===========

  // is for the div -> when pressed -> turned into a TEXTAREA

  $('.'+clickedItem).on('click', (event)=>{                           //setting up DOM eventlistener
      var savedNameFrontScreen = $('.'+clickedItem).text();           //saving text before edit
      event.stopPropagation();
      $('.'+clickedItem).html('<textarea class="newName">'+savedNameFrontScreen+'</textarea>')       //transfer to NEW HTML


      console.log('holding1', holding1);
      $('.'+clickedItem).off();
  });       

  // when clicked outside, save the change!
  $('body').on('click', (event) => {                                              //event for, clicking outside
          if (!$(event.target).closest('.'+closestElement).length) {                     // if click is outside
              // the click occured outside '#element'
              console.log('i ran out of the box');     
              holding1 = $('.'+newName).val(); 
              $('.'+clickedItem).html();                                          //reset html
              $('.'+clickedItem).html('<div>'+ holding1 + '</div>');
          }        
       $('body').off();
//        makeThemEditable();
  });
}

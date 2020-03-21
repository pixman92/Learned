//code that takes array
//makes forEach of the array
//adds an eventListener to those elements
//contained within the array

0: {savedEmail: "leo@gmail.com"}
1: {savedEmail: "tim@gmail.com"}

getAllArr.forEach(async(elem)=>{
    document.getElementById(elem.savedEmail).addEventListener('click', async()=>{
        await pullStatus(elem.savedEmail);
    });
});

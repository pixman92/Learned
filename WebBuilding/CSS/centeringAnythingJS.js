
window.addEventListener('resize', function(event){
    runCSS2();
});

function runCSS2(){
    changeCSS('BIGDiv', ['width450px', 'center']);
    changeCSS('editCardsParentDiv', ['widthFull', 'center']);
}

.center{
    margin: auto;
    width: 50%;
}

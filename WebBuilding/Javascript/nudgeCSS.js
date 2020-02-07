
//function to take an element, and change CSS
function nudgeCSS (select, changeMe, changeTo) {
    elem = document.querySelector(select);
    elem.style[changeMe] = changeTo;
}

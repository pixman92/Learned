// function that grabs an element
// set's a variable to that element's 'class' attribute
// takes in a string of Class statements
// then sets those back to the previous element
function makeDecks2() {
  const myElement = document.getElementById("container");
  let currentClass = myElement.getAttribute("class");
  let classToAdd = "$ md:fontsize[40px] md:background[black]";
  myElement.setAttribute("class", classToAdd);
}

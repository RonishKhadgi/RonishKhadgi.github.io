const header = document.querySelector(".top");
header.innerHTML = "Ronish Khadgi's Lab 4";

var paragraphOne = document.createElement("p");
var textOne = document.createTextNode("My name has six characters");
paragraphOne.appendChild(textOne);

var paragraphTwo = document.createElement("p");
var textTwo = document.createTextNode("The third character of my name is N");
paragraphTwo.appendChild(textTwo);

var breakLine = document.createElement("br");
paragraphTwo.appendChild(breakLine);
var textThree = document.createTextNode("ish");
paragraphTwo.appendChild(textThree);

function clickMe() {
    const content = document.querySelector(".content");
    content.innerHTML = "Hello world";     
    content.appendChild(paragraphOne);
    content.appendChild(paragraphTwo);
  }


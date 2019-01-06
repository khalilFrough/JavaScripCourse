//this is a custom JavaScript file
/* JavaScript has a function called IIFE => Immediately Invocked Function Expression */

(function() {
  // this is used to prevent JavaScript to automatically make variables
  "use strict";

  function buttonClicked() {
    console.log("About button clicked");
  }
  function aboutButtonOver(event) {
    event.currentTarget.style.opacity = 0.1;
  }
  function aboutButtonOut(event) {
    event.currentTarget.style.opacity = 0.5;
  }

  function homeContent() {
    let AboutButton = document.getElementById("AboutButton");
    AboutButton.textContent = "About JavaScript";
    AboutButton.addEventListener("click", buttonClicked);
    AboutButton.addEventListener("mouseover", aboutButtonOver);
    AboutButton.addEventListener("mouseout", aboutButtonOut);
  }

  function returnPi(){
      return Math.PI;
  }
  function aboutContent(){
      let myNumber=returnPi();
      console.log("the Value of PI is: "+myNumber);
      let para= document.getElementById("para");
      para.textContent="this is about JavaScript learning course!"
  }

  function start() {
    let title = document.title;
    console.log("App started!");
    console.log("--------------------");
    console.log(`%cTitle: ${title}`, `font-size:15px; color: red;`);
    switch (title) {
      case "Home":
        homeContent();
        break;
      case "About":
        aboutContent();
        break;

      default:
        break;
    }
  }
  window.addEventListener("load", start);
})();

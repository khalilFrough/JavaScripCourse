//this is a custom JavaScript file
/* JavaScript has a function called IIFE => Immediately Invocked Function Expression */

(function(){
    // this is used to prevent JavaScript to automatically make variables 
    "use strict"

    function start(){

        let title=document.title;

        switch(title){
            case "Home":
                let AboutButton=document.getElementById("AboutButton");
                AboutButton.addEventListener("click",function(){
                console.log("About Button was clicked!");
                });
            break;    
            case "about": 
            break; 

            default:
            break;

        }
        console.log("App started!");
        console.log("--------------------");
        console.log(`%cTitle: ${title}`,`font-size:15px; color: red;`);
           
    }
    window.onload=start();
})()
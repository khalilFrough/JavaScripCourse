//this is a custom JavaScript file

/* JavaScript has a function called IIFE => Immediately Invocked Function Expression */

(function(){
    function start(){
        console.log("App started!");
        console.log("--------------------");
        console.log("Hello, World");
    }
    window.onload=start();
})()
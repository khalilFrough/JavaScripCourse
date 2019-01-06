//this is a custom JavaScript file
/* JavaScript has a function called IIFE => Immediately Invocked Function Expression */

(function(){
    function start(){
        let title=document.title;
        console.log("App started!");
        console.log("--------------------");
        console.log(`%cTitle: ${title}`,`font-size:15px; color: red;`);
    }
    window.onload=start();
})()
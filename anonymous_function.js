
// With simple function declaration

function handler(){
    console.log('hi there')
}

global.onload = handler;


// Anonymous functions

global.onload = function(){console.log('Hi there')}


// Anonymous functions with settimeout
setTimeout(() => {console.log("Time to take the cookies out of the oven")}, 2000);







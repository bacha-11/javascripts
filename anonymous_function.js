
// With simple function declaration

function handler(){
    console.log('hi there')
}

global.onload = handler;


// Anonymous functions

global.onload = function(){console.log('Hi there')}


// Anonymous functions with settimeout
setTimeout(() => {console.log("Time to take the cookies out of the oven")}, 2000);


// nest functions

var migration = true

var flying = function(num){
    sound = 'flying';
    function wingFlapper(){
        console.log(sound);
    }
    for(var i=0; i<num; i++){
        wingFlapper()
    }
}

flying(3)

function quack(num){
    sound = 'quacker';
    var quacker = function(){
        console.log(sound)
    }
    for(var i=0; i<num; i++){
        quacker()
    }
}

quack(3)


// lexical scope

var justAVar = "Oh, don't you worry about it, I'm GLOBAL"; // Here we have a global
                                                          // variable called justAVar.
function whereAreYou() {
    var justAVar = "Just an every day LOCAL"; // And this function defines
                                             // a new lexical scope...
    return justAVar;
}

var result = whereAreYou();
console.log(result);



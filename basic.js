// console.log('Try hard to learn javascripts!');

// console.log('hahahaha');

// var myName = 'Ijaz Bacha'
// var myGender = 'Male'

// console.log(myName)
// console.log(myGender)

// var myage = 17
// console.log(typeof(myage))

// var a = 10
// var b = 20

// sum = a + b
// sub = a - b
// mul = a * b
// div = a / b

// console.log(sum)
// console.log(sub)
// console.log(mul)
// console.log(div)

// var a = 10 
// var b = 20

// console.log(a == b)
// console.log(a != b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a > b)
// console.log(a >= b)

// var a = 10
// var b = 20

// console.log(a < b && a > 11)
// console.log(a < b || a > 11)
// console.log(!(a < b && a > 11))

// var a = 7
// var b = '7'

// console.log(a == b) // only check the value of variable
// console.log(a === b) // check the value as well as type of the variable

// var nameStd = 'a'

// if (nameStd == 'a'){
//     console.log('your name is: ' + nameStd)
// }
// else if (nameStd == 'khan'){
//     console.log('your name is: ' + nameStd)
// }
// else{
//     console.log('no name')
// }


function test(){
    console.log('This is a function')
}

test()

function alertFun(){
    alert('This is alert function')
}

alertFun()


function sumNumber(num1, num2){
    var result = num1 + num2
    document.getElementById('add').innerHTML = 'The answer is: ' + result
}


var num1 = parseInt(prompt('Enter number'))
sumNumber(num1 , 20)
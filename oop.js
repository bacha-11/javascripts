
// let student = {
//     stdId : 1,
//     stdName : 'ijaz',
//     stdAge : 24,
//     get_data : function(){
//             console.log(`My Name is ${student.stdName} and Age is ${student.stdAge}.`);
//             }
// }

// // console.log(student.stdName)
// student.get_data()

let student = {
        stdId : 1,
        stdName : {
            firstName : 'ijaz',
            lastName : 'bacha',
        },
        stdAge : 24,
        get_data : function(){
                console.log(`My lastName is ${student.stdName.lastName} and Age is ${student.stdAge}.`);
                }
    }
    
    //  console.log(student.stdName)
    student.get_data()

    // Object Destructuring
    let {stdId, stdName, stdAge, get_data} = student
    console.log(get_data())



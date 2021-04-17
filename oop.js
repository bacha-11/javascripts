
let student = {
    stdId : 1,
    stdName : 'ijaz',
    stdAge : 24,
    get_data : function(){
            console.log(`My Name is ${student.stdName} and Age is ${student.stdAge}.`);
            }
}

// console.log(student.stdName)
student.get_data()

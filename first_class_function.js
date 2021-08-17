var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                { name: "Sue Property", paid: false, ticket: "firstclass" },
                { name: "John Funcall", paid: true, ticket: "coach" } ];


function processPassenger(passenger, testFunction){
    for(var i = 0; i < passenger.length; i++){
        if (testFunction(passenger[i])){
            return false;
        }
    }
    return true;
}


function checkNoFlyList(passenger){
    return (passenger.name == 'Dr. Evel')
}


function checkNoPaid(passenger){
    return (!passenger.paid)
}


function printPassenger(passenger) {
    console.log(`Passenger name is ${passenger.name} and paid  is ${passenger.paid}`)
}

processPassenger(passengers, printPassenger)


var allCanFly = processPassenger(passengers, checkNoFlyList)
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
    }

var allPaid = processPassenger(passengers, checkNoPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
    }



function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function() {
            console.log("Your choice is cola or water.");
        };
    }
    return orderFunction;
}
    
    
    
function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
        
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    // getDrinkOrderFunction();
    // // show movie
    // getDrinkOrderFunction();
    // pick up trash
}
    
    
function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);







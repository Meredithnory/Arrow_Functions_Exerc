/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => { console.log("Hyperdrive Activated!"); };
activateHyperdrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => console.log("No lifeforms detected");
scanForLife();
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({ x: 45, y: 45, z: 90 });
console.log(currentCoordinates());
/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    name: "Unity",
    recieveMessage: (message) => {
        console.log(`Message recieved: ${message}`);
        console.log(this.name);
    }
};

spacecraft.recieveMessage("Hello from Planet Jupiter!")

/*
 * Observations: I observe that when console.logging this.name, the console prints undefined. 
The reason to this particular instance is because you can't use the this.method within the 
annoymous function for it doesn't have their own 'this' method.
 * TODO: Explain here.
 */
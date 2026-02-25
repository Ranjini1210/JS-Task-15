function greet(name, callback) {
  console.log("Hello");

  callback();
}
function sayGoodbye() {
  console.log("Goodbye");
}
greet("Alex", sayGoodbye);

// Define the Callback: Create a function that performs a specific action.

// Define the Main Function: Create a function that takes another function as an argument.

// Perform Task: The main function starts the entire code from here.

// Execute Callback: Once the main function is complete, the main function "calls back" the other function which is passed as a parameter to it.
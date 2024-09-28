let number = 10; // Assign any number here

if (number > 0) {
  // Output for positive numbers
  console.log("This is a positive number");
} else if (number < 0) {
  // Output for negative numbers
  console.log("This is a negative number");
} else {
  // Output for zero
  console.log("The number you entered = 0");
}

//Second program

let day = prompt("Please enter a value between 1 and 7");

switch (day) {
  case "1":
    // Output Sunday
    console.log("Today is Sunday");
    break;
  case "2":
    // Output Monday
    console.log("Today is Monday");
    break;
  case "3":
    // Output Tuesday
    console.log("Today is Tuesday");
    break;
  case "4":
    // Output Wednesday
    console.log("Today is Wednesday");
    break;
  case "5":
    // Output Thursday
    console.log("Today is Thursday");
    break;
  case "6":
    // Output Friday
    console.log("Today is Friday");
    break;
  case "7":
    // Output Saturday
    console.log("Today is Saturday");
    break;
  default:
    console.log("You have entered an invalid number");
}

//Loop

for (let i = 1; i <= 5; i++) {
  // Print i
  console.log(i);
}

//Do While loop to break at the value 3
let j = 1;

do {
  // Print j j++;
  console.log(j++);

  if (j === 3) {
    // Use Break here
    break;
  }
} while (j <= 5);

//Do While loop to skip the value 3
let x = 1;

do {
  // Print x++;
  console.log(x++);
  if (x === 3) {
    continue;
  }
  // Use Continue to skip the value 3
} while (x <= 5);

//Accessing variables

let globalVar = "I'm global!";

function scopeExample() {
  let localVar = "I'm local!";
  // Access globalVar and localVar inside the function
  console.log(globalVar);
  console.log(localVar);
}

scopeExample();
//both variables are accessible from the function

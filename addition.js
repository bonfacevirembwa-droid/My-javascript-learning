// Guess first, then run

// 1.
console.log(5 + "5");
// You have: Number + String
// JS thinks: "Oh, you want to join text"
// Result: "55"  (Type is String)

// 2. This is the trap!
console.log(5 + 5 + "5");
// JS reads LEFT to RIGHT
// Step 1: 5 + 5 = 10 (Number + Number = Number)
// Step 2: 10 + "5" = "105" (Number + String = String)
// Result: "105" NOT 10!

// 3.
console.log("Hello" + 10);
// String + Number
// Result: "Hello10" (Type is String)

// 4. Bonus one for you:
console.log("5" + 5 + 5);
// Step 1: "5" + 5 = "55"
// Step 2: "55" + 5 = "555"
// Result: "555"

console.log(typeof (5 + "5")); // what type is "55" ?
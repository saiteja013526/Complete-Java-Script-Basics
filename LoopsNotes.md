✅ JavaScript Loops
Loops in JavaScript allow us to execute a block of code multiple times. They are essential for iterating over arrays, objects, or performing repetitive tasks efficiently.

🔹 1️⃣ for Loop
================
The for loop is used when we know how many times we want to repeat an action.

📌 Syntax

for (initialization; condition; increment/decrement) {
    // Code to execute
}
📌 Example 1: Print numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

📌 Output
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5


📌 Example 2: Loop through an array

let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
📌 Output
nginx
Apple
Banana
Cherry


🔹 2️⃣ while Loop
The while loop is used when we don’t know exactly how many times the loop should run, but we continue as long as a condition is true.

📌 Syntax
while (condition) {
    // Code to execute
}


📌 Example: Print numbers from 1 to 5

let i = 1;
while (i <= 5) {
    console.log("While Loop:", i);
    i++;
}

📌 Output
While Loop: 1
While Loop: 2
While Loop: 3
While Loop: 4
While Loop: 5



🔹 3️⃣ do-while Loop
The do-while loop is similar to while, but it executes the block at least once, even if the condition is false.

📌 Syntax

do {
    // Code to execute
} while (condition);

📌 Example: Execute at least once

let j = 6;

do {
    console.log("Do-While Loop:", j);
    j++;
} while (j <= 5);

📌 Output

Do-While Loop: 6
👉 Even though the condition j <= 5 is false, the loop runs once before stopping.



🔹 4️⃣ forEach() Loop (Arrays)
The forEach() loop is used only for arrays to iterate through elements without using an index.

📌 Syntax

array.forEach(function(element, index, array) {
    // Code to execute
});

📌 Example: Print all elements in an array

let colors = ["Red", "Green", "Blue"];

colors.forEach(function(color, index) {
    console.log(`Color at index ${index}: ${color}`);
});


📌 Output
Color at index 0: Red
Color at index 1: Green
Color at index 2: Blue


✅ Using Arrow Function (Shorter Syntax)

colors.forEach(color => console.log("Color:", color));

🔹 Summary Table

Loop Type	Use Case	                                Runs At Least Once?	                       Works with Arrays?

for	When the number of iterations is known	              ❌ No	                                    ✅ Yes
while	When the loop should continue until
a condition is false	                                    ❌ No	                                    ✅ Yes
do-while	When the loop should run at least once	        ✅ Yes	                                    ✅ Yes
forEach	Iterating over arrays only	                      ❌ No	                                    ✅ Yes


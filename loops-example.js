// ============================================
// FOR and FOREACH LOOPS EXAMPLES
// ============================================

// ========== 1. TRADITIONAL FOR LOOP ==========
console.log("--- TRADITIONAL FOR LOOP ---");

const fruits = ["Apple", "Banana", "Orange", "Mango"];

// Basic for loop with index
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Orange
// 3: Mango

// Backwards iteration
console.log("\n--- FOR LOOP BACKWARDS ---");
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}: ${fruits[i]}`);
}

// Step by 2
console.log("\n--- FOR LOOP WITH STEP ---");
for (let i = 0; i < fruits.length; i += 2) {
  console.log(`Index ${i}: ${fruits[i]}`);
}


// ========== 2. FOREACH METHOD ==========
console.log("\n--- FOREACH METHOD ---");

// Basic forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

// With index
console.log("\n--- FOREACH WITH INDEX ---");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// With array parameter (less common but useful)
console.log("\n--- FOREACH WITH ARRAY PARAMETER ---");
fruits.forEach((fruit, index, array) => {
  console.log(`Item: ${fruit}, Index: ${index}, Array length: ${array.length}`);
});


// ========== 3. REAL-WORLD EXAMPLES ==========
console.log("\n--- REAL-WORLD EXAMPLES ---");

const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 }
];

// FOR LOOP: Process with conditions and break
console.log("\n1. FOR LOOP - Find user and stop:");
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Bob") {
    console.log(`Found: ${users[i].name}, Age: ${users[i].age}`);
    break; // Stop loop
  }
}

// FOREACH: Process all items (no break)
console.log("\n2. FOREACH - Print all users:");
users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

// FOR LOOP: Modify array in-place
console.log("\n3. FOR LOOP - Modify array:");
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}
console.log("Doubled:", numbers);

// FOREACH: Can't easily modify original array (immutable approach)
console.log("\n4. FOREACH - Create new array (immutable):");
const originalNumbers = [1, 2, 3, 4, 5];
const doubled = [];
originalNumbers.forEach((num) => {
  doubled.push(num * 2);
});
console.log("Original:", originalNumbers);
console.log("Doubled:", doubled);


// ========== 4. OTHER LOOP METHODS ==========
console.log("\n--- OTHER ITERATION METHODS ---");

// FOR...OF (ES6) - Iterator protocol
console.log("\n1. FOR...OF - Cleaner than traditional FOR:");
for (const fruit of fruits) {
  console.log(fruit);
}

// FOR...IN - Iterates over object keys
console.log("\n2. FOR...IN - Object iteration:");
const person = { name: "John", age: 30, city: "NYC" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// MAP - Transform array (returns new array)
console.log("\n3. MAP - Transform data:");
const squared = numbers.map((num) => num ** 2);
console.log("Squared:", squared);

// FILTER - Select items (returns new array)
console.log("\n4. FILTER - Select items:");
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

// REDUCE - Accumulate value (returns single value)
console.log("\n5. REDUCE - Sum all:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);


// ========== 5. COMPARISON TABLE ==========
console.log("\n--- COMPARISON: FOR vs FOREACH ---");

console.log(`
╔════════════════════╦═════════════════════════════════╦═════════════════════════════╗
║ Feature            ║ Traditional FOR                 ║ FOREACH                     ║
╠════════════════════╬═════════════════════════════════╬═════════════════════════════╣
║ Break support      ║ Yes (break out early)           ║ No (use filter/map instead) ║
║ Continue support   ║ Yes (skip iteration)            ║ No                          ║
║ Index access       ║ Direct via i                    ║ Passed as 2nd parameter     ║
║ Return value       ║ None                            ║ Always undefined            ║
║ Performance        ║ Slightly faster                 ║ Slightly slower             ║
║ Readability        ║ Traditional but verbose         ║ Modern and concise          ║
║ Array modification ║ Easy to modify in-place         ║ Harder to modify original   ║
║ Browser support    ║ All browsers                    ║ IE9+                        ║
╚════════════════════╩═════════════════════════════════╩═════════════════════════════╝
`);


// ========== 6. WHEN TO USE WHAT ==========
console.log("\n--- WHEN TO USE WHAT ---");

console.log(`
USE FOR LOOP when:
  ✓ You need to break/continue in the loop
  ✓ You need to skip to different indices
  ✓ You're modifying array length during iteration
  ✓ You need backward iteration

USE FOREACH when:
  ✓ You want cleaner, more readable code
  ✓ You're performing simple operations on all items
  ✓ You're not modifying the original array
  ✓ You prefer functional programming style

USE FOR...OF when:
  ✓ You want FOR loop syntax but cleaner
  ✓ Working with iterables (arrays, strings, maps)
  ✓ You need break/continue but not indices

USE MAP/FILTER/REDUCE when:
  ✓ Transforming or selecting data (functional)
  ✓ Building a new array/value from existing data
  ✓ Chaining multiple operations
`);

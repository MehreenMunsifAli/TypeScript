/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array. */

let laptop = "Macbook Pro";
let num = 20;
let countries = ["Pakistan", "Turkey", "Azerbaijan", "Syria"];

console.log("is laptop == Macbook Pro ? I expect true");
console.log(laptop == "Macbook Pro"); // True

console.log("is laptop != Macbook Pro ? I expect false");
console.log(laptop != "Macbook Pro"); // False

console.log("laptop.toLowerCase() : ");
console.log(laptop.toLowerCase());

console.log("is num >= 10 && num <= 30 ? I expect true");
console.log(num >= 10 && num <= 30);

console.log("is num >= 10 || num <= 5 ? I expect true");
console.log(num >= 10 || num <= 5);

console.log("is 'Turkey' in countries ? I expect true");
console.log(countries.includes("Turkey"));

console.log("is 'Iran' in countries ? I expect false");
console.log(countries.includes("Iran"));
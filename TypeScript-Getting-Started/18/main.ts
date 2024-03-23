// Seeing the World: Think of at least five places in the world you’d like to visit.

let places: string[] = [
  "Ghizer Valley",
  "Arangkel",
  "Bashu Valley",
  "Ratti Gali",
  "Mahodand Lake",
];

console.log(places); //printing original order

console.log("sorted array:", [...places].sort()); //[...places] will create a shallow copy

console.log("original order: ", places); //original order

console.log("reverse order: ", [...places].sort().reverse()); //reverse alphabetical order without changing the original order

console.log("original order: ", places); //original

let reversedArray: string[] = places.reverse(); //changing original order

console.log("reversed array: ", reversedArray);

let originalOrder = places.reverse(); //back to original order

console.log("Original Order after Reverse: ", originalOrder);

console.log(
  "Original order has been changed to alphabetical order: ",
  places.sort()
);

console.log("Original order changed to reversed order: ", places.reverse());

console.log(places);

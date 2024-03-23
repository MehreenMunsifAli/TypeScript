// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Ghizer Valley", "Arangkel", "Bashu Valley", "Ratti Gali", "Mahodand Lake"];
console.log(places);
console.log("sorted array:", __spreadArray([], places, true).sort()); //[...places] will create a shallow copy
console.log("original order: ", places);
console.log("reverse order: ", __spreadArray([], places, true).sort().reverse());
console.log("original order: ", places);
var reversedArray = places.reverse();
console.log("reversed array: ", reversedArray);
var originalOrder = places.reverse();
console.log("Original Order after Reverse: ", originalOrder);
console.log("Original order has been changed to alphabetical order: ", places.sort());
console.log("Original order changed to reversed order: ", places.reverse());
console.log(places);

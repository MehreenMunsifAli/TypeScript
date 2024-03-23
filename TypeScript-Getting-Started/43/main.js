//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["magi1", "magi2", "magi3"];
var newMagicicans = [];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        newMagicicans[i] = magicians[i] + " The Great!";
    }
    return newMagicicans;
}
newMagicicans = make_great(magicians.slice()); //assigning the new array returned from make_great() to newMagicians
show_magicians(magicians); //original names
show_magicians(newMagicicans); //names with "the great"

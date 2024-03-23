// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsArray = ["Sadia", "Erum", "Tasleema", "Ulfat"];
var greetings = "Hello";
for (var i = 0; i < friendsArray.length; i++) {
    console.log("".concat(greetings, " ").concat(friendsArray[i], "!"));
}

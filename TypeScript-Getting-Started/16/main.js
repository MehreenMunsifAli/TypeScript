// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guestList = ["Afia Siddique", "Dr. Abdul Qadeer Khan", "Albert Einstein", "Sumbul Ashfaq"];
console.log("Great News! I've just found a bigger table");
guestList.unshift("Muhammad Ali"); // adds an element to the beginning
console.log(guestList);
guestList.splice(guestList.length / 2, 0, "Jennifer Aniston");
guestList.push("LeBron James"); //adds an element to the end
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", you're invited to the dinner tonight."));
}

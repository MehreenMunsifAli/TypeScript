// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList: string[] = [
  "Afia Siddique",
  "Dr. Abdul Qadeer Khan",
  "Albert Einstein",
  "Sumbul Ashfaq",
];
console.log("Great News! I've just found a bigger table");

guestList.unshift("Muhammad Ali"); // adds an element to the beginning
guestList.splice(guestList.length / 2, 0, "Jennifer Aniston"); //0 because we don't want to remove any element
guestList.push("LeBron James"); //adds an element to the end

for (let i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]}, you're invited to the dinner tonight.`);
}

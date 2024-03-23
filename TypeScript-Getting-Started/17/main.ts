// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList: string[] = ["Muhammad Ali", "Afia Siddique", "Jennifer Aniston", "Dr. Abdul Qadeer Khan", "Albert Einstein", "Sumbul Ashfaq", "LeBron James"];

console.log("I feel sorry to inform you that the table has not arrived and I can only invite 2 people for dinner");

let index = guestList.length - 1;
while (guestList.length > 2) {
  console.log(`${guestList[index]} I'm unable to invite you to the dinner tonight. Please accept my apologies`);
  guestList.pop();
  
  index--;
}

console.log(`guest list : ${guestList}`);

for (let i = 0; i < guestList.length; i++){
  console.log(`${guestList[i]}, you're still invited to the dinner tonight`);
}

while (index >= 0) {
  guestList.pop();
  index--;
}

console.log(`guest list: ${guestList}`);
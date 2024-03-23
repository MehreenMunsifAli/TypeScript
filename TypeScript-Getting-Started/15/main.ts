// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestList: string[] = ["Afia Siddique", "Dr. Abdul Qadeer Khan", "Rehan Kiani", "Sumbul Ashfaq"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]}, I'm inviting you to the dinner tonight. Your presence will be appreciated, Thanks`);
}

console.log(`Unfortunately, ${guestList[2]} can't make it to the dinner`);

guestList[2] = "Albert Einstein";

for (let i = 0; i < guestList.length; i++){
  console.log(`Hello ${guestList[i]}, You're still invited to the dinner tonight. Your presence will be appreciated, Thanks`);
}
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let guestList: string[] = ["Afia Siddique", "Dr. Abdul Qadeer Khan", "Rehan Kiani", "Sumbul Ashfaq"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]}, I'm inviting you to the dinner tonight. Your presence will be appreciated, Thanks`);
}
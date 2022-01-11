// 82
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// "This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// "No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// "What are you, a communist?"), "Wht r y,  cmmnst?")

function disemvowel(str) {
   const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
   //prettier-ignore
   return str.split('').filter(lett=> !vowels.includes(lett)).join('');
}
//mas bakan
// function disemvowel(str) {
//    return str.replace(/[aeiou]/gi, '');
//  }
// 114 - 6 KYU

console.log("")
console.error("# 01 Reverse string and Ignore the spaces");
console.log("Given string is:","Hard Work always pays back:");
var myName="Hard work aways pays back";
var mystring="Soon i will be Angular IT champ";
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);

console.log("")
console.log("Given string is:","Soon i will be Angular IT champ");
var myName="Hard work aways pays back";
var mystring="Soon i will be Angular IT champ";
var lenthStr = mystring.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(mystring.charAt(index));
    reverseStr = reverseStr + mystring.charAt(index)
    var char=reverseStr.trim("");
    console.log(char.length-1);
}
console.log(reverseStr);
console.log(char);
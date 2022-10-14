console.log("======print string with no argument and return value====");
function stringhandson(){
console.log("String Hands on");
}
var result =stringhandson()
console.log(result);


console.log("------ String------");
console.log("******01 print string as it is******");
 var string = "Hey you are doing good, keep it up"
 console.log("Given string is:",string);

 console.log("*****02 Calculate length of string******");
 var string = "Hey  you  are  doing  good ,  keep  it  up"
 console.log(string.length);

 console.log("*****03 Remove extra spaces******");
 var string="   Hey you are doing good ,keep it up   "
var st=string.trim();
console.log(st);

console.log("*****04 Total number of extra spaces****** ");
var string="   Hey you are doing good ,keep it up   "
var st=string.split();
console.log(st);

console.log("*******05 print first and last charachter on same line*******");
var string="Hey you are doing good ,keep it up"
var st=string[0];
console.log(st);

var string="Hey you are doing good ,keep it up"
var st=string[string.length-1];
console.log(st);

console.log("******* 06 index of word good*******");
var string="Hey you are doing good ,keep it up"
var st = string.indexOf("good");
console.log(st);

console.log("******* 07 substring and slice*******");
var string="Hey you are doing good,keep it up"
console.log("Substring:",string.substring(23));
console.log("slice:",string.slice(23));





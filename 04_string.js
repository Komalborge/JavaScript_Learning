var greet = "Good Morning";

console.log(greet);

var count = greet.length;
console.log(count);

console.log(greet.length);

var sonali = greet.charAt(8);
console.log(sonali);

console.log(greet.charAt(8));

var char = greet.indexOf('o');
console.log(char);



var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);

var greet = "Good Morning bro and sis"
var replaceDemo =greet.replace("Morning","evening");
console.log(replaceDemo);


console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);

greet.includes("bro");
console.log(greet.includes("bro"));

console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));

console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);



var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);


var givenString = "Hey you are doing good keep it up";
var lengthofstring =  givenString.length;
console.log(`2.length of given string is:${givenstring.length}`);


// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);


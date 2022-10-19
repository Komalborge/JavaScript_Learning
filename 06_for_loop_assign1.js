console.log("***********WAF to print numbers from 5 to 15 by incrementing+1**************");
console.log("Question=> 01:");

for (let index = 5; index <= 15; index = index + 1) {
    console.log(index);

}

console.log("***********WAF to print numbers from 50 to 40 by decrementing by 1**************");
console.log("Question=> 02:");

for (let index = 50; index >= 40; index = index - 1) {
    console.log(index);

}

console.log("***********WAF to find first 15 0dd numbers**************");
console.log("Question=> 03:");
var countodd = 0;
for (let index = 0; index < 15; index++) {
    if (index % 2 !== 0) {
        console.log(index);
        countodd = countodd + 1;
        if (countodd == 15)
            break;
    }
}

console.log("***********WAF to find first 10 even numbers**************");
console.log("Question=> 04:");
var countodd = 0;
for (let index = 0; index <= 10; index++) {
    if (index % 2 == 0) {
        console.log(index);
        countodd = countodd + 1;
        if (countodd == 10)
            break;
    }
}

console.log("***********WAF to print table of 5**************");
console.log("Question=> 05:");
var constresult = 0;
for (let index = 5; index <= 50; index + 5) {
    if (index % 2 == 0) {
        console.log(index);
    }
    constresult = 5 * 5;
    if (constresult == 50)
        break;
}


var wordLenghtSquare = function(givenWord){
    var wordLength = givenWord.length;
    var sqr = wordLength * wordLength;
    return sqr;
 
 }
 var result = wordLenghtSquare("JavaScript");
 log(result);
 
 var givenString = "I am Angular Developer";
 var strLength = givenString.length;
 var arryayWords = givenString.split(" ");
 var count  = arryayWords.length;
 var res = strLength / count;
 log(res)
 
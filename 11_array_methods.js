console.log("================= unshift=====================");
let arrayofNumbers=[1,3,7,8,9,3,7];
//arrayofNumbers[4]=11;
console.log(arrayofNumbers);
arrayofNumbers.unshift(10);
arrayofNumbers.unshift(0,55,66,77)
console.log(arrayofNumbers);
//update value or Replace value//


console.log("===================== Shift ======================");
let array=[11,22,47,81]
console.log(array);
array.shift();
console.log(array);

console.log("============ slice()========================");
let arrayNumbers = [1,3,7,8,9,3,7];
let slicedElements = arrayNumbers.slice(2)
console.log(slicedElements);
let slicedvalues=arrayNumbers.slice(1,4)
console.log(slicedvalues);

console.log("========================splice==== insert values========");
let Array_numbers=[1,3,7,8,3,7]
console.log(Array_numbers);
let splicedElements = Array_numbers.splice(2,2);
console.log(splicedElements);
console.log(Array_numbers);


console.log("=================splice 2.0=====replacevalues========");
let Array=[1, 3, 7, 8 ,9 ,3];
console.log(Array);
Array.splice(2,2,44,66);
console.log(Array);





//includes//
console.log(arrayofNumbers.includes(7));
console.log(arrayofNumbers.includes(9));

//transverse array//

for (let index = 0; index < arrayofNumbers.length; index++) {
    const element = arrayofNumbers[index];
    //console.log(element);
    
}

//or using for in loop//
for (const key in arrayofNumbers) {
    const element = arrayofNumbers[key];
    //console.log(element);
}
   //print reverse order//
   let totalElement = arrayofNumbers.length-1;
   for (let index = totalElement; index >=0; index--) {
    const element = arrayofNumbers[index];
    //console.log(element);
    
   }
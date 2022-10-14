console.log("-------------------Assignment 0A-----------------------");
console.log("------------------ Step:01--------------------");
console.log("    ");
function malemarriageeligibility(gender,age,boyname){
    var male =age>=21
?`Hey ${boyname} you are eligible for Marriage `:"Hey Stew jobs you are Not eligible for Marriage ";
console.log(male);



}
 malemarriageeligibility("male",25,"Billgets");
 malemarriageeligibility("male",17,"Stew jobs");

console.log("  ");
 console.log("-------------------Assignment 0A-----------------------");
console.log("------ -------------Step:02-----");
console.log(" ");
var femalemarriageeligibility=function(gender,age,girlname){
    var female=age>=18
    ? `Hey ${girlname} you are eligible for marriage`: "Hey Jenifer you are Not eligible for marriage";
    console.log(female);
}
femalemarriageeligibility("female",16,"Jenifer")
femalemarriageeligibility("female",27,"Malinda Gates")
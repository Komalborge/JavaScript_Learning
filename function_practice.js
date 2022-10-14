//function: it is block of code//
//addition function//
function add(p1,p2){
    return p1+p2;
}
var addition=add(4,4);
console.log("addition of two numbers:",addition);

//substraction//

function sub(a1,a2){
    return a1-a2;
}
var result= sub(5,2)
console.log("substraction of two number:",result);

//Multiplication//
function Mul(s1,s2){
    return s1*s2
}
var result = Mul(4,4)
console.log("multiplication of two number:",result);
console.log("-------------------------------------------------------------------------------------------------------------------------------------");

//function with argument and return value//
console.log("Examples:");
console.log("      ");
function myinfo(money){
console.log("my name is komal",money);
console.log("i love java script");
return "vegitables"
}
var result=myinfo(1000)
console.log(result);

console.log("------------02----------------");
console.log("===concatination===");
function myname(firstname,lastname){
    return firstname+lastname

}
var result=myname("komal","borge")
console.log(result);

console.log("-----------03-----------------");
function info(firstname,lastname) {
    console.log("i love myself");
    console.log("i love javascript");
    console.log("firstname:",firstname);
    console.log("lastname:",lastname);
    return lastname
}
 var result=info("komal","borge")
 console.log(result);

 console.log("------04---------");
 console.log("=======Swapping=======");
console.log("          ");
function swap_values(arg1, arg2){
    console.log("---------- Before swap-------------");
    console.log(arg1, arg2);
    console.log("---------- After swap-------------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("1000", "2000");


//addition of three parameters//
console.log("---------------------------------------------");
console.log("-----addition of 3 parametes");
function additionofthreeparameter(arg1,arg2,arg3){
    var add=arg1+arg2+arg3
    console.log("addition of three parameter:",add);
return add
}

additionofthreeparameter("hello","good","morning")


console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("==========function expression=============");
var square = function(value){
    console.log(value*value);

}
square(5)
console.log("--------------multiplication of number----------------");

var rectangle=function(value){
console.log("multiplication of 2 numbers",value*value);
}
rectangle(10,10)


console.log("-------------swapping-----------");
var swap=function(arg1,arg2){
    console.log(arg1,arg2);
    console.log("after swap");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}
swap("virat","anushka")


console.log("------concate------------");
var concate=function(arg1,arg2){
var add=arg1+arg2;
console.log("cocate two values:",add);
return add
}
concate("komal","borge")


console.log("-------------area of rectangle using FE---------");
console.log("given number of lenght and width:",length=499,width=917);
var Rectangle= function(arg1,arg2){
    console.log(length*width);
}
Rectangle(499,917)


















console.log("===== 01 Square Of Numbers=====");
console.log("Given numbers:",5,6,25,100);
var square= function(value){
console.log("Square of numbers is :",value*value);
}
square(5);
square(6);
square(25);
square(100);

console.log("===== 02 Area of Triangle=====");
console.log("Given base and height:",base=45,height=34);
var Triangle= function(value){
    console.log(1/2*base*height);
}
Triangle(1/2*45*34)

console.log("======03 Area of Rectangle======");
console.log("given length and width:", length=499,width=917);
var Rectangle= function(value){
    console.log(length*width);
}
Rectangle(499,917)

console.log("======04 Swapping using function expression======");
var swap=function(arg1,arg2){
    console.log("-----before swap-----");
    console.log(arg1, arg2);
    console.log("----- After swap-----");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap("Virat", "Anushka");
swap("1000", "2000");

console.log("=======05 String Operations=======");
console.log("Given string is:","Java script is most popular language");

var string = "Java script is most popular language"
console.log(string);

var count=string.indexOf("s")
console.log("index of charachter 's' is:",count);

var count=string.indexOf("language")
console.log("index of string 'lang'is:",count);

var count=string.charAt(string.length-3)
console.log("last 3rd charachter of string is:",count);

var count=string.charAt(string.length-1)
console.log("last character in string is:",count);



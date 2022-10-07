//concate//
console.log("=======01 concate======");
function myinfo(FirstName, LastName, MobNo, FullName) {
    console.log("Welcome to JavaScript")
    console.log("i only love JavaScript");
    return FirstName + LastName;

}
var details = myinfo("Komal", "borge", "9702986189", "Komal Santosh Borge")
console.log(details);
//Function with argument and return value//
console.log("======02 Function with argument and return value=======");
function stud(FirstName, LastName, MobNo, FullName) {
    console.log("firstname:",FirstName);
    console.log("Lastname:",LastName);
    return MobNo;
}
var result = stud("Komal", "borge", "9702986189", "Komal Santosh Borge")
console.log(result);
console.log("======03 Swapping=======");
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
  
console.log("========04 Addition of 3 parameters and return========");
function add_three_number(arg1,arg2,arg3){
    var add=arg1+arg2+arg3
    console.log("addition of 3 number is ="+add);
return add;
}
add_three_number(10,20,30)
add_three_number(10.23,600,40)
add_three_number("hello","Good","Morning")
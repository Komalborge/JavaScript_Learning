console.log(" # Name :-      Komal Santosh Borge");
console.log(" # Assignment:- Arrow Assignment 01");
console.log(" # Date:-       04/11/22");
console.error("-------------------Arrow function with no arg and no return value----------------");
let show=()=>{
    console.log("Good Evening,Today is Friday");
}
show();
console.error("-------------------Arrow function with 3 arg and no return value----------------");

let mul= (n1,n2,n3) => n1*n2*n3;
console.log("@1 :-Multiplication of (5,2,2) is",mul(5,5,2));
console.log("02 :-Multiplication of (10,4) is",mul(10,4));

console.error("-------------------Arrow function with 5 arg and  return value Addition ----------------");

let add=(num1,num2,num3,num4,num5)=>{
    return num1+num2+num3+num4+num5

}
console.log("Addition of parameters with return value:-",add(100,100,200,349,759));
console.log("Addition of parameters with return value:-",add("I am","learning","ES6","features","in depth"));
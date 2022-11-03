
console.log(myname);
//console.log(roll_no); // not hoisted//
//console.log(PIN_Code);//not hoisted
var myname = "mohit Sharma";
//let roll_no=123;
//const PIN_Code=45768;
Show();

function Show() {
    console.log("show function");
}
//display //not ALLOWED

var display = function () {
    console.log("inside display function expression");
}
display();
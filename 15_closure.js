var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function() {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;
}
let returnValue = outer();
returnValue();

var global_variable=200;
 function outside(){
    let outerside_fun_variable=100;
    let innerside=function() {
        let innerside_fun_variable=300;
        console.log(innerside_fun_variable,outerside_fun_variable,global_variable);
    }
    return innerside;
 }
 let returnvalue=outside();
returnValue();








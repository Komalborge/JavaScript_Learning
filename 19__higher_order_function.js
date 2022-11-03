function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
    return function() {
        console.log("Yahooo.. mai to ban gaya....");
    }
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

let returnFun = do_assignment(copy_assignment);
returnFun();
console.log("---------------------practice---------------");
function uideveloper(callback){
    console.log("i am ui developer");
    callback
    return function(){
        console.log(" yahooo mai toh ban gaya");
    }
}
function reactdeveloper(){
    console.log("i am a react developer");
}

let returnval=uideveloper(reactdeveloper);
returnval();
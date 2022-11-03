function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}

setTimeout( display, 4000);

setInterval(display, 2000);

console.log("call backprctice");
function do_assignment(callback){
    console.log("i am doing assignment and its done now");
    callback();
}

function copy_assignment(){
    console.log("hey bro...let me copy");
}
do_assignment(copy_assignment);

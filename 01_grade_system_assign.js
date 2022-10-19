console.error("--------------Grade system assignment---------");
function gradesystem(score) {
    if (score<=35)
    {
        console.log("you are Failed");
    }
    else if (score>=35 && score<=60)
    {
        console.log("you are Passed");
    }
    else if (score>=60  && score<=75) {
        console.log("you are Passed:","Grade is 'B'");
}
else if (score>75 && score<=90) {
    console.log("you are passed with grade'A'");
    
}
else if (score>=90 && score<=100) {
    console.log("you are passed with grade 'A+'");
}
else if (score>100) {
    console.log("Invalide score");
    
}
else if (score==null || score==undefined) {
    console.log("input in stringformat is not allow");
    
}else{

    console.log("invalid input");
}
}
gradesystem(66)
console.log("-------------------------------------");
gradesystem(13)
console.log("-------------------------------------");
gradesystem(98)
console.log("-------------------------------------");
gradesystem("fifty five")
console.log("-------------------------------------");
gradesystem(35)
console.log("-------------------------------------");
gradesystem(75)
console.log("-------------------------------------");
gradesystem(null)
console.log("-------------------------------------");
gradesystem(undefined)
console.log("-------------------------------------");
gradesystem(-20)
console.log("-------------------------------------");
gradesystem(55)
console.log("-------------------------------------");
gradesystem(82)
console.log("-------------------------------------");
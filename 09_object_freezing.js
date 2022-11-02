//const student = {    //clonning
   // name: "Mohit",
  //  rollNo : 1234
//}

//let studentClone = Object.assign({}, student);
//console.log(studentClone);


const student = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone = Object.assign({}, student);// Deep cloning will be performed
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);

let mergedObject = Object.assign({}, student, address);
console.log(mergedObject);

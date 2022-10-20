console.error(".................Assignment 0A on Object..................");
console.log("----------------Create Empty object----------------");
let Abc={};
console.log({});
console.log("-------------------Adding 1st nested object ----------------------------------------------");
let teacher={
    FullName:"Gajanan Kharat",
    Designation:"IT proffesor",
    yearsofExperience:"15",
    Degrees:{
        Eng:"CSC",
        PHD:"Adv Computing,IT",
    },
    Certificates:{
      cert1:"Hacker Rank Participation",
      cert2:" IFE course",
      cert3:"ADV programming",
      cert4:"Javascript programming "
    },
  }
  console.table(teacher);
console.table(teacher.Degrees);
console.log(teacher);
console.log("-------------------Adding 2nd nested object-----------------------------------------------");
console.table(teacher.Certificates);
console.log("-------------------Delete one Certificate from nested object------------------------------");

delete teacher.Certificates.cert1
console.table(teacher.Certificates);
console.table(teacher);
console.log("-------------------Add New property and log on console------------------------------");
teacher.Degrees="MBA"
console.table(teacher);
console.log("-------------------Add New Certificate from nested object and log on console------------------------------");
console.table(teacher.Certificates);
console.table(teacher);
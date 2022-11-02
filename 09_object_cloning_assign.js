
console.log("===================Cloning using Object.assign() method=======================");

const bank_BOM= {
  Bankname: "Bank of Maharashtra",
  ManagerName:" Mr.Chitale",
  AccountNumber:"111 234 456 88",
  IFSCCode:"abcde",
  Branch:"Karad",
}
 

const bank_location={
    Street:"Satara",
    City:"Karad",
    Pincode:"433308",
    State:"Maharashtra"
}

let bank_clone=Object.assign({},bank_BOM,bank_location);
console.table(bank_clone);




console.log("===================Merge the step1,step2,step4 into new object=======================");

const rate_of_interest={
    Home_loan_interest:"10%",
    personal_loan_interest:"15%",
    due_interest:"0.2%"

}

let bank_interest=Object.assign({},bank_BOM,bank_location,rate_of_interest);
console.table(bank_interest);

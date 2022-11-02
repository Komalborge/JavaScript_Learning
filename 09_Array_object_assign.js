
console.log("=======================Log all Bank details====================");
class Bank{
   constructor(bank_name,Location,Account_no,Ifsc,interest_rate){
   this.bank_name=bank_name;
   this.Location=Location;
   this.Account_no=Account_no;
   this.Ifsc=Ifsc;
   this.interest_rate=interest_rate

}
}
let bank1=new Bank("axis_bank","Thane","123 456 7766","abcd","0.5%")
let bank2=new Bank("sbi_bank","Mumbai","123 456 7678","abcd","8%")
let bank3=new Bank("icici_bank","Pune","123 456 8766","abcd","10%")
let bank4=new Bank("kotak_bank","Latur","123 456 9766","abcd","12%")
let bank5=new Bank("hdfc_bank","Nanded","123 456 4766","abcd","9%")
let bank6=new Bank("panjab_bank","Ratnagiri","123 456 3766","abcd","15%")
console.log(bank1);
console.log(bank2);
console.log(bank3);
console.log(bank4);
console.log(bank5);
console.log(bank6);


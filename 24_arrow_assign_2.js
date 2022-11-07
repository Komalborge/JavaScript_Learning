console.log(" # Name :-      Komal Santosh Borge");
console.log(" # Assignment:- Arrow Assignment 02");
console.log(" # Date:-       04/11/22");
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh = new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayofemployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh]
console.log("-----------log only finanace department employeee & log dept, name of emp-----------");
for (const Employee of arrayofemployees) {
    if (Employee.emp_dept=="Finance") {
        console.log(`Name:${Employee.emp_name}      Department:${Employee.emp_dept}`);
        
    }
}
console.log("-----------find the employee whose salary >70,000 &emp_name,company,salary-----------");
for (Employee of arrayofemployees) {
    if (Employee.emp_salary>70000 && Employee.emp_company&& Employee.emp_salary) {
        console.log(`Employee whose salary is greater than 700000:-${Employee.emp_name}`);
        
    }
    
}

console.log("--------------Name starts with `R`-----------------------------");
for ( Employee of arrayofemployees) {
    let s=Employee.emp_name;
    if (startswith("R")) {
        console.log(`Employee name whos start with "R":-${Employee.emp_name}`);
    }
    
}
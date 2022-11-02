console.log("--------------Assignment 01----------------------");
console.error("----------------Define class for vehical-----------");
class Vehical{
    constructor(Name,Model,Color,Fueltype,Transmissiontype){
        this.Name=Name;
        this.Model=Model;
        this.Color=Color;
        this.Fueltype=Fueltype;
        this.Transmissiontype=Transmissiontype
     }
    
}
let vehical1=new Vehical("Venue","Turbo+","White","Diesel","4 Wheeler");
let vehical2=new Vehical("KTM","200","Orange","petrol","Bike");
let vehical3=new Vehical("Activa","100","White","petrol","2 wheeler");
let vehical4=new Vehical("Bus","Turbo","Red","petrol","6 Wheeler");
let vehical5=new Vehical("Truck","Turbo","black","Diesel","4 Wheeler");
console.log(vehical1);
console.log(vehical2);
console.log(vehical3);
console.log(vehical4);
console.log(vehical5);

console.error("----------------Define class for College -----------");

class College{
    constructor(CollegeName,PrincipleName,Department,Fees,City,State){  
        this.CollegeName=CollegeName;
        this.PrincipleName=PrincipleName;
        this.Department=Department;
        this.Fees=Fees;
        this.City=City;
        this.State=State;
    }
}
let College1=new College("Jondhale","A.P.Shah","IT","50,000","Mumbai","Maharashtra")
let College2=new College("Dyansadhana","J.K.Patil","CS","20,000","Thane","Maharashtra")
let College3=new College("National","A.G.Desai","BE","1,20,000","Bhandup","Maharashtra")
let College4=new College("KJ.Somaiyya","J.s.Gondkar","B.Tech.IT","60,000","Vidyavihar","Maharashtra")
let College5=new College("Don Bosco","S.K.Bosco","Data Science","70,000","Airoli","Maharashtra")

console.log(College1);
console.log(College2);
console.log(College3);
console.log(College4);
console.log(College5);

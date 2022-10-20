let mohitperson={
    fullname:"sachin tendulkar",
    age:42,
    "ismarrie":true
}
console.log(object.entries(mohitperson));
console.log(object.key(mohitperson));



let person={
    fullname:"komal borge",
    city:"mumbai",
    age:42,
    isMarried:true,
    address:{
        street: "AS CLUB",
        pincode:12345,
        city:"pune",
        state:"MH",
    },
    details:function(){
        let personDetails=`Details are:${this.fullName},${this.age},${this.address.city}`
        return personDetails;
    }
}
 console.log(person.details);

console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.landmark="Near Main Road";

person.fullname="komal santosh borge"
person.pincode=123456;
delete person.age;
person.profession="angular developer"
console.log(person);


console.log(person.city);
console.log(person["age"]);

let personfullname=person.fullname;
console.log(personfullname);
console.log(person.fullname);
const arrayofnumbers=[10,20,30,40,20,10];
arrayofnumbers.forEach((currentvalue)=>{
  console.log(currentvalue);
});

//how to log negative //
arrayofnumbers.forEach((currentvalue,index)=>{
    if (currentvalue<0) {
        
        console.log(currentvalue,index);
    }
});

console.log("============traversing set using foreach================");
const setofnumbers=new set(arrayofnumbers);
setofnumbers.forEach((value)=>{
    console.log(value);
})

console.log("==========traversing map using foreach=====");console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

console.error("# 01 count total number of vowels using includes() for string:","Good Morning IT champ");
var givenstring="Good Morning IT champ "
var vowels="aeiou";
 var vowelscount=0;
for (let index = 0; index < givenstring.length; index++) {
    var char=givenstring.charAt(index);
    var isavailable=vowels.includes(char);
    if (isavailable) {
        console.log(char,isavailable);
        vowelscount=vowelscount+1;
    
    }
}
console.log(`total number of vowels count:${vowelscount}`);
console.log("   ");
console.error("# 02 count total number of vowels using includes() for string:","I am a very good IT Developer");
var givenstring1="I am a very good IT Developer "
var vowels="aeiou";
 var vowelscount=0;
for (let index = 0; index < givenstring1.length; index++) {
    var char=givenstring1.charAt(index);
    var isavailable=vowels.includes(char);
    if (isavailable) {
        console.log(char,isavailable);
        vowelscount=vowelscount+1;
    
    }
}
console.log(`total number of vowels count:${vowelscount}`);

console.log("    ");
console.error("# 02 WAF to get sum of cube of numbers from 1 to 5 ");
function add_three_number(arg1,arg2,arg3){
    var add=arg1*arg2*arg3+arg1*arg2*arg3+arg1*arg2*arg3;
    console.log("cube of 3 number is ="+add);
return add;
}
add_three_number(5,5,5)

console.log("   ");
console.error("# 03 only add odd positioned char on console and not consider empty spaces");

function oddpositionchars(givenstring)
{

    console.log(`given string is:-${givenstring}`);
    lostring=givenstring.toLowerCase();

    var result="";
    for (let index = 0; index < lostring.length; index++) {
        var char=lostring.charAt(index);
        if(index%2!==0 && char!=" ")
        {
            result=result+char;
        }
    }
    console.log(`odd character from the given string are:-${result}`);
}
oddpositionchars("Hard work always pays back")
console.log("");
oddpositionchars("Soon i will be Angular IT champ")
console.log("");
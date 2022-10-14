var tcseligibilitycheck  =function(grad_score,hsc_score,ssc_score,candidate_name){
var result=grad_score>=70 || hsc_score>=80 || ssc_score>=90
?  `congrates ${candidate_name} you are eligible for TCS Interview` : "unfortunately you are not eligible for Interview";
console.log(result);
}
tcseligibilitycheck(80,86,90,"komal borge")
tcseligibilitycheck(70,65,55,"kajal sharma")
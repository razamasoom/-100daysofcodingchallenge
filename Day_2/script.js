// Udemy JS course Coding challenge 
// case 1 
let markWeight = 78 ;
const  markHeight= 1.69;
let  johnWeight= 92 ; 
const johnHeight= 1.95;
 let bmiMark = markWeight/ markHeight**2 ;
 let bmiJohn = johnWeight/ johnHeight**2 ;
 let markHigherBMI = bmiMark>bmiJohn;
 console.log( bmiMark,bmiJohn,markHigherBMI);

//  case 2 
// let markWeight = 95 ;
// const  markHeight= 1.88;
// let  johnWeight= 85 ; 
// const johnHeight= 1.76;
//  let bmiMark = markWeight/ markHeight**2 ;
//  let bmiJohn = johnWeight/ johnHeight**2 ;
//  let markHigherBMI = bmiMark>bmiJohn;
//  console.log( bmiMark,bmiJohn,markHigherBMI);
if (bmiMark>bmiJohn){
    console.log("Mark's BMI"+bmiMark+" is higher than John's BMI", bmiJohn)
}else if (bmiJohn>bmiMark){
    console.log("John's BMI"+bmiJohn+" is higher \n than Mark's BMI", bmiMark)

}else{
    console.log("Mark's and John's BMI are same ");}


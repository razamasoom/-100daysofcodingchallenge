//  let age = prompt( "What is your Age?")
//  age= Number.parseInt(age);
//  if ( age>18){
//     alert ("Yes you can drive ")
//  } else {
//     alert ("No you cannot drive ")
//  }
// problem 1 
let runAgain= true;
const canDrive = (age)=>{
    return age>18?true:false
}

while (runAgain) {
let age = prompt( " Enter Your age");
age = Number.parseInt(age);
if ( age<0){
    console.error("Please enter a valid age");
    break;
}


if (canDrive(age)){
    alert ("Yes you can drive")
}
else { 
    alert ( " You cannot drive")
}
runAgain = confirm ( "Do you want to play again ?")

}
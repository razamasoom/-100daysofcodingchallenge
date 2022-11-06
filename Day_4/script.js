// let dolphinsAvg = (96+108+89)/3;
// let koalasAvg = (88+91+123)/3;
// console.log( dolphinsAvg, koalasAvg);

// if ( dolphinsAvg>koalasAvg){
//     console.log("Dolphins win the trophy 🏆")
// } else if (koalasAvg>dolphinsAvg) {
//     console.log ( "Koalas win the trophy 🏆");
// } else if ( koalasAvg === dolphinsAvg){
//     console.log("Both win the trophy 🥇")
// }

let dolphinsAvg = (97+100+101)/3;
let koalasAvg = (100+95+103)/3;
console.log( dolphinsAvg, koalasAvg);

if ( dolphinsAvg>koalasAvg && dolphinsAvg>=100){
    console.log("Dolphins win the trophy 🏆")
} else if (koalasAvg>dolphinsAvg && koalasAvg>=100) {
    console.log ( "Koalas win the trophy 🏆");
} else if ( koalasAvg === dolphinsAvg  && koalasAvg>=100 && dolphinsAvg>=100 ){
    console.log("Both win the trophy 🥇")
}else {
    console.log ( "No one wins the Trophy 😒")
}


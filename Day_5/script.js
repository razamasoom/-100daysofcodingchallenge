// coding challenge #4  
// tip calculator basic 
// const bill = 430 ; 
// const tip = bill <= 300 && bill >= 50 ? bill * .15: bill * .2 ;
// console.log (`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip }` )

// tip calulator using arrays 
let  calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;

}

let bills = [125, 555, 40 ];
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log ( tips);
let totals = [bills[0]+ tips[0],bills[1]+ tips[1],bills[2]+ tips[2]]
console.log( totals , tips , bills );
console.log (`The bill was ${bills} the tip was ${tips}, and the total value
was ${bills + tips }` )

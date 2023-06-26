//coding challenge #1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 95;
const heightJohn = 1.88;
let markBMI = weightMark / heightMark ** 2;
console.log(markBMI);
let johnBMI = weightJohn / heightJohn ** 2;
console.log(johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//coding challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
  console.log(`John's BMI ${johnBMI}) is higher than Mark's! (${markBMI})`);
}

//coding challenge #3
//Data 1
let avgDolphins1 = (96 + 108 + 89) / 3;
let avgKoalas1 = (88 + 91 + 110) / 3;

if (avgDolphins1 === avgKoalas1) {
  console.log(`Its a Draw`);
} else if (avgDolphins1 > avgKoalas1) {
  console.log(`Dolphins are Winners`);
} else {
  console.log(`Koalas are Winners`);
}

//Data Bonus 1
let avgDolphinsB1 = (97 + 112 + 101) / 3;
let avgKoalasB1 = (109 + 95 + 123) / 3;

if (avgDolphinsB1 === avgKoalasB1) {
  console.log(`Its a Draw`);
} else if (avgDolphinsB1 > avgKoalasB1 && avgDolphinsB1 > 100) {
  console.log(`Dolphins are Winners`);
} else if (avgKoalasB1 > avgDolphinsB1 && avgKoalasB1 > 100) {
  console.log(`Koalas are Winners`);
}

//Data Bonus 2
let avgDolphinsB2 = (97 + 112 + 101) / 3;
let avgKoalasB2 = (109 + 95 + 106) / 3;

if (avgDolphinsB2 === avgKoalasB2 && avgDolphinsB2 > 100 && avgKoalasB2 > 100) {
  console.log(`Its a Draw`);
} else if (avgDolphinsB2 > avgKoalasB2 && avgDolphinsB2 > 100) {
  console.log(`Dolphins are Winners`);
} else if (avgKoalasB2 > avgDolphinsB2 && avgKoalasB2 > 100) {
  console.log(`Koalas are Winners`);
}

//coding challenge #4
let tip;
let bill = 275; //40 , 430
bill > 50 && bill < 300 ? (tip = (bill / 100) * 15) : (tip = (bill / 100) * 20);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the  total value ${bill + tip}`
);

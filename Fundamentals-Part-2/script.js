"use strict";
let Dolphins;
let Koalas;

const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;
//Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
//Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(27, 34, 23);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No Team Wins`);
  }
}

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

//coding challenge #2

function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return (bill / 100) * 15;
  } else {
    return (bill / 100) * 20;
  }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//coding challenge #3
const Mark = {
  fName: `Mark`,
  lName: `Miller`,
  mass: 78,
  height: 1.69,
  fullName: this.fName + this.lName,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const John = {
  fName: `John`,
  lName: `Smith`,
  mass: 78,
  height: 1.69,
  fullName: this.fName + this.lName,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.fName}'s BMI (${Mark.BMI}) is higher than ${John.fName}'s (${John.BMI})`
  );
} else {
  console.log(
    `${John.fName}'s (${John.BMI}) is higher than ${Mark.fName}'s BMI (${Mark.BMI})`
  );
}

//coding challenge #4
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];

for (let index = 0; index < bills2.length; index++) {
  tips2.push(calcTip(bills2[index]));
  total2.push(calcTip(bills2[index]) + bills2[index]);
}
console.log(tips2);
console.log(total2);
